import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Headphones, MapPin, Phone, Mail } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { ContactUsSchema } from "@/lib/validations"
import { addMessageToFirestore } from "@/lib/actions"

type ContactUsFormData = z.infer<typeof ContactUsSchema>;

export default function Contact() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { user } = useAuth();

    const form = useForm<ContactUsFormData>({
        resolver: zodResolver(ContactUsSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
            terms: false,
        },
    })

    async function onSubmit(values: ContactUsFormData) {
        setIsLoading(true);
        try {
            if (!user?.id) {
                throw new Error("Please sign in to send a message");
            }

            await addMessageToFirestore(values, user.id);
            toast({
                title: "Success",
                description: "Message sent. We will get back to you soon.",
            });
            form.reset();
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Unable to send message right now",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="inline-block rounded-xl shadow-xl bg-[#30D0AD] p-4">
                            <Headphones className="h-12 w-12 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold">Let's Talk</h1>
                        <p className="text-gray-600">
                            Have questions? We're here to help you achieve your career goals!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="rounded-full bg-[#30D0AD] p-2">
                                <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-gray-600">77 High field Road London J36 7SU</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="rounded-full bg-[#30D0AD] p-2">
                                <Phone className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-gray-600">+00 000 0000000</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="rounded-full bg-[#30D0AD] p-2">
                                <Mail className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-gray-600">contact@optimcv.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div className="rounded-xl bg-white p-6 shadow-lg">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter Full Name"
                                                    {...field}
                                                    className="border-none outline-none h-16 bg-[#EBEBEB]"
                                                    disabled={isLoading}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter Email"
                                                    {...field}
                                                    className="border-none outline-none h-16 bg-[#EBEBEB]"
                                                    disabled={isLoading}
                                                    type="email"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Subject"
                                                {...field}
                                                className="border-none outline-none h-16 bg-[#EBEBEB]"
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter your message"
                                                {...field}
                                                className="min-h-[120px] resize-none border-none outline-none bg-[#EBEBEB]"
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="terms"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Accept{" "}
                                                <a href="/terms" className="text-[#30D0AD] hover:underline">
                                                    terms & conditions
                                                </a>
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full bg-[#30D0AD] hover:bg-[#30D0AD]/90 h-12 text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? "SENDING..." : "SEND MESSAGE"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

