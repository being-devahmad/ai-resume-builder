import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { useToast } from "./use-toast";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebaseConfig";

const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Default tier settings for new users
const DEFAULT_TIER_ID = "Y81bht8LCYZthLaNiwp6";
const DEFAULT_PLAN_STATUS = "active";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const register = async (email: string, password: string, username: string) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        email: user.email,
        name: email.split("@")[0],
        username: username,
        role: "user",
        avatar: DEFAULT_AVATAR,
        createdAt: new Date(),
        currentTierId: DEFAULT_TIER_ID,
        currentPlanStatus: DEFAULT_PLAN_STATUS,
        updatedAt: new Date(),
      };

      // Create a user document in Firestore
      await setDoc(doc(db, "users", user.uid), userData);

      toast({
        title: "Account Created Successfully",
        description: "Use your email and password to login anytime.",
      });

      // Log the user in
      context.login({
        id: user.uid,
        email: user.email!,
        name: email.split('@')[0],
        role: 'user',
        avatar: DEFAULT_AVATAR,
        currentTierId: DEFAULT_TIER_ID,
        currentPlanStatus: DEFAULT_PLAN_STATUS,
      });

      return { success: true, user };
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Error",
        description: "Unable to create an account right now.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        throw new Error("User data not found in Firestore");
      }

      const userData = userDoc.data();

      context.login({
        id: user.uid,
        email: user.email!,
        name: userData.name,
        role: userData.role,
        avatar: userData.avatar,
        currentTierId: userData.currentTierId,
        currentPlanStatus: userData.currentPlanStatus,
      });

      toast({
        title: "Login Successful",
        description: `Welcome back, ${userData.name} of plan ${userData.currentPlanStatus}!`,
      });

      return { success: true, user };
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "Unable to log in. Please check your credentials and try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);

      toast({
        title: "Password Reset Email Sent",
        description: `An email has been sent to ${email}. Follow the instructions to reset your password.`,
      });
    } catch (error) {
      console.error("Password reset error:", error);
      toast({
        title: "Error",
        description: "Unable to send password reset email. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    ...context,
    register,
    login,
    resetPassword,
    isLoading,
  };
};
