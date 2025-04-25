import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addMessageToFirestore = async (message: any, userId: string | null) => {
  try {
    const messageWithUserId = {
      ...message,
      userId: userId || 'anonymous',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const docRef = await addDoc(collection(db, "messages"), messageWithUserId);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};