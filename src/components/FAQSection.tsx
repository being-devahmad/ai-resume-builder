'use client'

import { Button } from "@/components/ui/button"
import { Minus, Plus } from 'lucide-react'
import { useState } from "react"

export default function FAQSection() {
    const [openItem, setOpenItem] = useState<string | null>(null)

    const faqs = [
        {
            id: 'login',
            question: 'How do I Login?',
            answer: 'To log in, click on the \'Login\' button at the top of the page. Enter your email and password, then click \'Submit.\' If you\'re a new user, please create an account first. If you\'ve forgotten your password, you can reset it by clicking \'Forgot Password?\' and following the instructions sent to your email.'
        },
        {
            id: 'costs',
            question: 'What are the Costs?',
            answer: 'Our pricing information can be found on the pricing page.'
        },
        {
            id: 'create-account',
            question: 'How do i create an account?',
            answer: 'Creating an account is simple. Click the \'Sign Up\' button and follow the instructions.'
        },
        {
            id: 'template',
            question: 'How do i changed my template?',
            answer: 'You can change your template in the account settings section.'
        },
        {
            id: 'cancel',
            question: 'How do i cancel my Subscription?',
            answer: 'To cancel your subscription, go to your account settings and select \'Subscription\'.'
        }
    ]

    return (
        <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold leading-tight">
                        Have Questions? We've Got Answers!
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about OptimCV, all in one place
                    </p>
                    <div className="flex gap-4">
                        <Button variant="outline" className="rounded-full">
                            More Questions
                        </Button>
                        <Button variant="link" className="text-primary hover:no-underline">
                            Contact Us
                        </Button>
                    </div>
                </div>

                {/* Right Column - Custom FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="border-b border-gray-200">
                            <button
                                onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                                className="flex w-full justify-between items-center py-4 text-left"
                            >
                                <h1 className="text-xl font-semibold">{faq.question}</h1>
                                {openItem === faq.id ? (
                                    <Minus className="h-6 w-6 flex-shrink-0" />
                                ) : (
                                    <Plus className="h-6 w-6 flex-shrink-0" />
                                )}
                            </button>
                            {openItem === faq.id && (
                                <div className="pb-4 text-gray-600" style={{ fontFamily: "Cairo, serif" }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

