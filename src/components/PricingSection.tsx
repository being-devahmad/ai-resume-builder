"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PricingSection = () => {

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-teal-50 to-white">
            {/* Decorative Elements */}
            {/* Background decorative elements */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle at center, #2CD3B7 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute -top-20 left-0 w-[500px] h-[500px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle at center, #E2E8F0 0%, transparent 70%)",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4 py-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Budget-friendly <span className="text-[#2CD3B7]">Pricing</span> alternatives
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Get started free or upgrade to share your impact for all completed tasks with multiple people
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-4">



                    {/* Premium Monthly */}
                    <Card className="relative overflow-hidden rounded-2xl border-0 bg-white shadow-md transition-transform hover:-translate-y-1">
                        {/* <div className="absolute -top-3 left-0 w-full">
                            <div className="mx-auto w-fit bg-[#2CD3B7] px-4 py-1 text-sm font-medium text-white rounded-full">
                                BEST DEAL
                            </div>
                        </div> */}
                        <CardHeader className="pb-0">
                            <CardTitle className="text-xl font-medium text-gray-900">Premium Monthly</CardTitle>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold">€9.99</span>
                                <span className="ml-1 text-sm text-gray-600">/month</span>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <Button className="w-full bg-[#2CD3B7] hover:bg-[#20C5A9]">Subscribe</Button>
                            <div className="py-3 space-y-4">
                                {[
                                    "Lifetime access to all professional templates",
                                    "Advanced customization options",
                                    "Export formats: PDF, Word, and Plain Text",
                                    "Real-time AI content suggestions",
                                    "ATS compatibility check",
                                    "Pro resume sections",
                                    "No branding (watermark-free downloads)",
                                    "Unlimited section items",
                                    "Priority customer support",
                                    "Thousands of design options",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-start">
                                        <Check className="mr-3 h-5 w-5 text-[#2CD3B7]" />
                                        <span className="text-sm text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Premium Lifetime */}
                    <Card className="relative overflow-hidden rounded-2xl border-0 bg-white shadow-md transition-transform hover:-translate-y-1">
                        <CardHeader className="pb-0">
                            <CardTitle className="text-xl font-medium text-gray-900">Premium Lifetime</CardTitle>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold">€49.99</span>
                                <span className="ml-1 text-sm text-gray-600">/6 months</span>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <Button className="w-full bg-[#2CD3B7] hover:bg-[#20C5A9]">Subscribe</Button>
                            <div className="py-3 space-y-4">
                                {[
                                    "Lifetime access to all professional templates",
                                    "Advanced customization options",
                                    "Export formats: PDF, Word, and Plain Text",
                                    "Real-time AI content suggestions",
                                    "ATS compatibility check",
                                    "Pro resume sections",
                                    "No branding (watermark-free downloads)",
                                    "Unlimited section items",
                                    "Priority customer support",
                                    "Thousands of design options",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-start">
                                        <Check className="mr-3 h-5 w-5 text-[#2CD3B7]" />
                                        <span className="text-sm text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Professional */}
                    <Card className="relative overflow-hidden rounded-2xl border-0 bg-white shadow-md transition-transform hover:-translate-y-1">
                        <CardHeader className="pb-0">
                            <CardTitle className="text-xl font-medium text-gray-900">Professional</CardTitle>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold">€250</span>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <Button className="w-full bg-[#2CD3B7] hover:bg-[#20C5A9]">Subscribe</Button>
                            <div className="py-3 space-y-4">
                                {[
                                    "One tailored CV customized for a specific job description or career goal",
                                    "One tailored cover letter for job applications",
                                    "LinkedIn profile optimization",
                                    "Interview preparation (mock interview session, strategies, and tips)",
                                    "Consultation call (15–30 minutes)",
                                    "Follow-up support (up to 2 rounds of revisions for CV, cover letter, or LinkedIn profile)",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-start">
                                        <Check className="mr-3 h-5 w-5 text-[#2CD3B7]" />
                                        <span className="text-sm text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Free Plan */}
                    <Card className="relative overflow-hidden rounded-2xl border-0 bg-white shadow-md transition-transform hover:-translate-y-1">
                        <CardHeader className="pb-0">
                            <CardTitle className="text-xl font-medium text-gray-900">Free</CardTitle>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold">$0</span>
                                <span className="ml-1 text-sm text-gray-600">/month</span>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <Button variant="outline" className="w-full border-[#2CD3B7] text-[#2CD3B7] hover:bg-[#F7FCFB]">
                                In Use
                            </Button>
                            <div className="mt-10 space-y-4">
                                {[
                                    "Access to 5 free CV templates",
                                    "Unlimited CV creation and downloads (with watermark)",
                                    "Basic customization options",
                                    "Export as PDF",
                                    "OptimCV branding (watermark included)",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-start">
                                        <Check className="mr-3 h-5 w-5 text-[#2CD3B7]" />
                                        <span className="text-sm text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PricingSection

