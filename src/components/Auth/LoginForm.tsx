import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom'
import { Lock, Mail, Eye, EyeOff } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useAuth } from '@/hooks/useAuth'
import { z } from 'zod'
import { LoginSchema } from '@/lib/validations'


type LoginFormData = z.infer<typeof LoginSchema>;

export default function SignInForm() {
    const { login, isLoading } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [isVisible, setIsVisible] = useState(false)

    const from = location?.state?.from?.pathname || "/"

    const form = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange",
    })

    const onSubmit = async (values: LoginFormData) => {
        try {
            await login(values.email, values.password)
            navigate(from, { replace: true })
        } catch (error) {
            console.error("Login error:", error)
        }
    }

    const toggleVisibility = () => setIsVisible(!isVisible)

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="space-y-2">
                    <div className="h-1 w-8 bg-[#30D0AD] rounded" />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Sign in
                        <br />
                        your account!
                    </h1>
                    <p className="text-sm text-black">
                        Save time with hassle-free templates. Beat the competition using actionable, contextual advice.
                        Highlight key achievements with memorable visuals.
                    </p>
                </div>

                <div className="space-y-4">
                    <Button
                        variant="outline"
                        className="w-full justify-center space-x-2"
                        onClick={() => { }}
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        <span>Sign in with Google</span>
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full justify-center space-x-2"
                        onClick={() => { }}
                    >
                        <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span>Sign in with Facebook</span>
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full justify-center space-x-2"
                        onClick={() => { }}
                    >
                        <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                        <span>Sign in with LinkedIn</span>
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">or</span>
                        </div>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                                    <Mail className="h-5 w-5 text-[#30D0AD]" />
                                                </div>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder="ridho.tijan@gmail.com"
                                                    className="pl-10 h-14 rounded-xl border-[#30D0AD] bg-white shadow-sm"
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                                    <Lock className="h-5 w-5 text-[#30D0AD]" />
                                                </div>
                                                <Input
                                                    {...field}
                                                    type={isVisible ? "text" : "password"}
                                                    placeholder="**********"
                                                    className="pl-10 pr-10 h-14 rounded-xl border-[#30D0AD] bg-white shadow-sm"
                                                />
                                                <div
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                                    onClick={toggleVisibility}
                                                >
                                                    {isVisible ? (
                                                        <EyeOff className="h-5 w-5 text-[#30D0AD]" />
                                                    ) : (
                                                        <Eye className="h-5 w-5 text-[#30D0AD]" />
                                                    )}
                                                </div>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <Button
                                type="submit"
                                className="w-full bg-[#30D0AD] hover:bg-emerald-500 text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? "Signing In..." : "SIGN IN"}
                            </Button>
                        </form>
                    </Form>

                    <div className="space-y-2 text-center text-sm">
                        <p className="flex flex-col items-center gap-3">
                            <span className='text-black'>Don't have an account?{" "}</span>
                            <RouterLink to="/create-account" className="text-[#30D0AD] hover:text-emerald-500 text-sm font-bold">
                                Signup
                            </RouterLink>
                        </p>
                        <p className="flex flex-col items-center gap-3">
                            <span className="text-black">
                                Never received or forgot your password
                            </span>
                            <RouterLink to="/reset-password" className='font-bold underline text-sm text-[#30D0AD] hover:text-emerald-500'>
                                Reset Password ?
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

