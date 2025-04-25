
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Pencil, Upload } from 'lucide-react'
import { doc, deleteDoc, setDoc } from 'firebase/firestore'
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useNavigate } from "react-router-dom"
import { auth, db } from "@/lib/firebaseConfig"
import { toast } from "@/hooks/use-toast"

const dashboardSettingsFormSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    city: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }),
    postalCode: z.string().min(4, {
        message: "Postal code must be at least 4 characters.",
    }),
    address: z.string().min(5, {
        message: "Address must be at least 5 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const reauthSchema = z.object({
    password: z.string().min(1, "Password is required"),
})

function ReauthenticateDialog({
    isOpen,
    onClose,
    onReauthenticate
}: {
    isOpen: boolean;
    onClose: () => void;
    onReauthenticate: () => void;
}) {
    const form = useForm<z.infer<typeof reauthSchema>>({
        resolver: zodResolver(reauthSchema),
        defaultValues: {
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof reauthSchema>) => {
        try {
            const user = auth.currentUser
            if (!user || !user.email) {
                throw new Error("No user is currently signed in.")
            }

            const credential = EmailAuthProvider.credential(user.email, values.password)
            await reauthenticateWithCredential(user, credential)
            onReauthenticate()
        } catch (error) {
            console.error("Reauthentication error:", error)
            toast({
                title: "Reauthentication Failed",
                description: "Please check your password and try again.",
                variant: "destructive",
            })
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Reauthenticate</DialogTitle>
                    <DialogDescription>
                        For security reasons, please enter your password to continue.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Confirm</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default function DashboardSettings() {
    const [isUploading, setIsUploading] = useState(false)
    const [isReauthDialogOpen, setIsReauthDialogOpen] = useState(false)
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof dashboardSettingsFormSchema>>({
        resolver: zodResolver(dashboardSettingsFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            city: "",
            postalCode: "",
            address: "",
            email: "",
            phone: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof dashboardSettingsFormSchema>) {
        console.log(values)
        try {
            const user = auth.currentUser
            if (!user) {
                toast({
                    title: "Error",
                    description: "No user is currently signed in.",
                    variant: "destructive",
                })
                return
            }

            const docRef = doc(db, "users", user.uid)
            await setDoc(docRef, values, { merge: true })

            toast({
                title: "Success",
                description: "Your profile has been updated.",
            })
        } catch (error) {
            console.error("Error updating profile:", error)
            toast({
                title: "Error",
                description: "An error occurred while updating your profile. Please try again.",
                variant: "destructive",
            })
        }
    }

    const handleImageUpload = () => {
        setIsUploading(true)
        // Simulate upload delay
        setTimeout(() => setIsUploading(false), 1500)
    }


    const handleDeleteAccount = async () => {
        try {
            const user = auth.currentUser
            if (!user) {
                toast({
                    title: "Error",
                    description: "No user is currently signed in.",
                    variant: "destructive",
                })
                return
            }

            // Attempt to delete the user
            try {
                // Delete user document from Firestore
                await deleteDoc(doc(db, 'users', user.uid))

                // Delete user authentication
                await deleteUser(user)

                toast({
                    title: "Account Deleted",
                    description: "Your account has been successfully deleted.",
                })

                // Redirect to home page or login page
                navigate('/')

            } catch (error: any) {
                if (error.code === "auth/requires-recent-login") {
                    // If reauthentication is required, open the reauthentication dialog
                    setIsReauthDialogOpen(true)
                } else {
                    throw error
                }
            }
        } catch (error) {
            console.error("Error deleting account:", error)
            toast({
                title: "Error",
                description: "An error occurred while deleting your account. Please try again.",
                variant: "destructive",
            })
        }
    }

    const handleReauthenticate = () => {
        setIsReauthDialogOpen(false)
        handleDeleteAccount()
    }


    const handleUpgradePlan = () => {
        navigate('/pricing')
    }



    return (
        <div className="flex justify-center items-center">
            <div className="container max-w-4xl py-10">
                <h1 className="text-3xl font-bold mb-8">Account</h1>

                {/* Plan Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Plan</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Upload className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Free Account</h3>
                                <p className="text-sm text-muted-foreground">
                                    You are on free plan. You can create a resume, save, and edit it all in one place.
                                </p>
                            </div>
                        </div>
                        <Button onClick={handleUpgradePlan}>Upgrade</Button>
                    </CardContent>
                </Card>

                {/* Personal Information Form */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>
                            Update your personal information and account settings.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                {/* Profile Photo */}
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage src="/placeholder.svg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleImageUpload}
                                        disabled={isUploading}
                                    >
                                        <Pencil className="mr-2 h-4 w-4" />
                                        Change Photo
                                    </Button>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>City</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="New York" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="postalCode"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Postal Code</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="10001" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="123 Street Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="+1234567890" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit">Save Changes</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                {/* Delete Account Section */}
                <Card className="border-destructive">
                    <CardHeader>
                        <CardTitle>Delete Account</CardTitle>
                        <CardDescription>
                            Permanently remove your account and all of its contents from our platform.
                            This action is not reversible, so please continue with caution.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive">Delete Account</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive text-destructive-foreground">
                                        Delete Account
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardContent>
                </Card>

                <ReauthenticateDialog
                    isOpen={isReauthDialogOpen}
                    onClose={() => setIsReauthDialogOpen(false)}
                    onReauthenticate={handleReauthenticate}
                />
            </div>
        </div>
    )
}

