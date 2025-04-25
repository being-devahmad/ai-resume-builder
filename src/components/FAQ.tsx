

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#010205]">
          Have Questions? We&apos;ve <br /> Got Answers!
        </h1>
        <p className="text-muted-foreground">
          Everything you need to know about OptimCV, all in one place
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4  ">
        <AccordionItem value="login" className="border rounded-lg px-6 bg-[#F9F9FA] ">
          <AccordionTrigger className="text-lg font-bold hover:no-underline  ">
            How do i Login?
          </AccordionTrigger>
          <AccordionContent className="text-[#5F5F65]">
            To log in, click on the &apos;Login&apos; button at the top of the page. Enter your email
            and password, then click &apos;Submit.&apos; If you&apos;re a new user, please create an
            account first. If you&apos;ve forgotten your password, you can reset it by clicking
            &apos;Forgot Password?&apos; and following the instructions sent to your email.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="costs" className="border rounded-lg px-6 bg-[#F9F9FA] ">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            What are the Costs?
          </AccordionTrigger>
          <AccordionContent className="text-[#5F5F65]">
            Our pricing structure is designed to be transparent and competitive. Please visit our
            pricing page for detailed information about our current rates and packages.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="create-account" className="border rounded-lg px-6 bg-[#F9F9FA] ">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            How do i create an account?
          </AccordionTrigger>
          <AccordionContent className="text-[#5F5F65]">
            Creating an account is simple. Click on the &apos;Sign Up&apos; button, fill in your
            details, and follow the verification process. You&apos;ll receive a confirmation email to
            activate your account.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="template" className="border rounded-lg px-6 bg-[#F9F9FA]">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            How do i changed my template?
          </AccordionTrigger>
          <AccordionContent className="text-[#5F5F65]">
            You can change your template by going to your account settings and selecting
            &apos;Templates.&apos; Choose from our available options and click &apos;Apply&apos; to
            update your template.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cancel" className="border rounded-lg px-6 bg-[#F9F9FA]">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            How do i cancel my Subscription?
          </AccordionTrigger>
          <AccordionContent className="text-[#5F5F65]">
            To cancel your subscription, go to your account settings, select &apos;Subscription,&apos;
            and click on &apos;Cancel Subscription.&apos; Follow the prompts to complete the
            cancellation process.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

