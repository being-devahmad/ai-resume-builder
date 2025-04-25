// import { Card } from "@/components/ui/card";
// import { Form, FormField } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ContactInfoSchema } from "@/lib/validations";
// import { Button } from "@nextui-org/button";
// import { Input } from "@nextui-org/input";
// import { z } from "zod";
// import { useEffect, useState } from "react";
// import { Textarea } from "@/components/ui/textarea";
// import { Brain } from 'lucide-react';
// import { AIChatSession } from "@/services/AIModal";
// import { AIGenerateDialog } from "@/components/AIGenerateDialog";

// interface ContactInfoProps {
//   allData: Record<string, any>;
//   setAllData: (data: Record<string, any>) => void;
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
//   categoryData: Record<string, any>;
// }

// export const ContactInfo: React.FC<ContactInfoProps> = ({
//   allData,
//   setAllData,
//   setActiveTab,
//   categoryData
// }) => {

//   console.log("categoryData->", categoryData)

//   const form = useForm({
//     resolver: zodResolver(ContactInfoSchema),
//     defaultValues: {
//       firstName: categoryData?.firstName || allData.firstName || "",
//       lastName: categoryData?.lastName || allData.lastName || "",
//       jobTitle: categoryData?.jobTitle || allData.jobTitle || "",
//       phone: categoryData?.phone || allData.phone || "",
//       email: categoryData?.email || allData.email || "",
//       country: categoryData?.country || allData.country || "",
//       city: categoryData?.city || allData.city || "",
//       postalCode: categoryData?.postalCode || allData.postalCode || "",
//       summary: categoryData?.summary || allData.summary || "",
//     },
//     mode: "onChange",
//   });

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = form;

//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [suggestions, setSuggestions] = useState<string[]>([]);

//   const handleInputChange = (field: string, value: string) => {
//     setAllData({ ...allData, [field]: value });
//   };



//   const handleSubmitContactDetails = (values: z.infer<typeof ContactInfoSchema>) => {
//     console.log("Form Submitted", values);
//     setAllData({ ...allData, ...values });
//     console.log("Updated AllData:", { ...allData, ...values });
//     setActiveTab("experience");
//   };

//   const prompt = `Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 1 - 2 lines in array format, with summary in JSON Format. Format should be like 
//   [
//     {
//       id : "",
//       summary : ""
//   }] `

//   const generateSummaryFromAI = async () => {
//     setIsAnalyzing(true);
//     const PROMPT = prompt.replace('{jobTitle}', allData?.jobTitle);
//     try {
//       const result = await AIChatSession.sendMessage(PROMPT);
//       const parsedResult = JSON.parse(result.response.text());
//       console.log("paresedResult-->", parsedResult)
//       const summaries = parsedResult && parsedResult.map((item: any) => item.summary);
//       setSuggestions(summaries);
//       setShowSuggestions(true);
//     } catch (error) {
//       console.error("Error generating AI suggestions:", error);
//     } finally {
//       setIsAnalyzing(false);
//     }
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     form.setValue("summary", suggestion);
//     setAllData({ ...allData, summary: suggestion });
//     setShowSuggestions(false);
//   };

//   const handleAcceptAll = () => {
//     const combinedSummary = suggestions.join(" ");
//     form.setValue("summary", combinedSummary);
//     setAllData({ ...allData, summary: combinedSummary });
//     setShowSuggestions(false);
//   };

//   useEffect(() => {
//     const formFields = [
//       'firstName', 'lastName', 'jobTitle', 'phone', 'email',
//       'country', 'city', 'postalCode', 'summary'
//     ];

//     const updatedValues = formFields.reduce((acc: any, field: any) => {
//       if (categoryData && categoryData[field]) {
//         acc[field] = categoryData[field];
//       } else if (allData[field]) {
//         acc[field] = allData[field];
//       }
//       return acc;
//     }, {});

//     form.reset(updatedValues);
//   }, [allData, categoryData, form]);

//   console.log("allData>>", allData)


//   return (
//     <Card className="p-6">
//       <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
//       <Form {...form}>
//         <form
//           className="flex w-full flex-col gap-8 lg:gap-5"
//           onSubmit={handleSubmit(handleSubmitContactDetails)}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             {/* First Name */}
//             <FormField
//               control={control}
//               name="firstName"
//               render={({ field }) => (
//                 <Input
//                   label="First Name"
//                   variant="bordered"
//                   isInvalid={!!errors.firstName}
//                   errorMessage={errors.firstName?.message?.toString()}
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("firstName", e.target.value);
//                   }}
//                 />
//               )}
//             />
//             {/* Last Name */}
//             <FormField
//               control={control}
//               name="lastName"
//               render={({ field }) => (
//                 <Input
//                   label="Last Name"
//                   variant="bordered"
//                   isInvalid={!!errors.lastName}
//                   errorMessage={errors.lastName?.message?.toString()}
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("lastName", e.target.value);
//                   }}
//                 />
//               )}
//             />
//           </div>

//           {/* Job Title */}
//           <div className="grid grid-cols-1 gap-3">
//             <FormField
//               control={control}
//               name="jobTitle"
//               render={({ field }) => (
//                 <Input
//                   label="Job Title"
//                   variant="bordered"
//                   isInvalid={!!errors.jobTitle}
//                   errorMessage={errors.jobTitle?.message?.toString()}
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("jobTitle", e.target.value);
//                   }}
//                 />
//               )}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             {/* Phone */}
//             <FormField
//               control={control}
//               name="phone"
//               render={({ field }) => (
//                 <Input
//                   label="Phone"
//                   variant="bordered"
//                   isInvalid={!!errors.phone}
//                   errorMessage={errors.phone?.message?.toString()}
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("phone", e.target.value);
//                   }}
//                 />
//               )}
//             />
//             {/* Email */}
//             <FormField
//               control={control}
//               name="email"
//               render={({ field }) => (
//                 <Input
//                   label="Email"
//                   type="email"
//                   variant="bordered"
//                   isInvalid={!!errors.email}
//                   errorMessage={errors.email?.message?.toString()}
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("email", e.target.value);
//                   }}
//                 />
//               )}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//             {/* Country */}
//             <FormField
//               control={control}
//               name="country"
//               render={({ field }) => (
//                 <Input
//                   label="Country"
//                   variant="bordered"
//                   isInvalid={!!errors.country}
//                   errorMessage={errors.country?.message?.toString()}
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("country", e.target.value);
//                   }}
//                 />
//               )}
//             />
//             {/* City */}
//             <FormField
//               control={control}
//               name="city"
//               render={({ field }) => (
//                 <Input
//                   label="City"
//                   variant="bordered"
//                   isInvalid={!!errors.city}
//                   errorMessage={errors.city?.message?.toString()}
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("city", e.target.value);
//                   }}
//                 />
//               )}
//             />
//             {/* Postal Code */}
//             <FormField
//               control={control}
//               name="postalCode"
//               render={({ field }) => (
//                 <Input
//                   label="Postal Code"
//                   variant="bordered"
//                   isInvalid={!!errors.postalCode}
//                   errorMessage={errors.postalCode?.message?.toString()}
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("postalCode", e.target.value);
//                   }}
//                 />
//               )}
//             />
//           </div>

//           <div>
//             <div className="flex justify-end">
//               <Button
//                 size="sm"
//                 radius="sm"
//                 className="font-bold bg-black text-white mb-1"
//                 variant="faded"
//                 onClick={generateSummaryFromAI}
//               >
//                 <Brain /> Generate with AI
//               </Button>
//             </div>
//             <FormField
//               control={control}
//               name="summary"
//               render={({ field }) => (
//                 <Textarea
//                   className={`textarea-bordered bg-[#F7F7F8] w-full p-2 border-2 rounded-lg ${errors.summary ? 'border-red-500' : ''
//                     }`}
//                   placeholder="Enter a brief summary"
//                   {...field}
//                   onChange={(e) => {
//                     field.onChange(e);
//                     handleInputChange("summary", e.target.value);
//                   }}
//                 />
//               )}
//             />
//           </div>

//           <div className="flex items-center justify-end mt-10">
//             <Button
//               radius="sm"
//               className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
//               variant="faded"
//               type="submit"
//             >
//               Next to Experience <span className="pl-2">&#x2192;</span>
//             </Button>
//           </div>
//         </form>
//       </Form>

//       <AIGenerateDialog
//         isAnalyzing={isAnalyzing}
//         showSuggestions={showSuggestions}
//         suggestions={suggestions}
//         onClose={() => setShowSuggestions(false)}
//         onSuggestionClick={handleSuggestionClick}
//         onAcceptAll={handleAcceptAll}
//       />

//     </Card>
//   );
// };




import { Card } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInfoSchema } from "@/lib/validations";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Brain } from 'lucide-react';
import { AIChatSession } from "@/services/AIModal";
import { AIGenerateDialog } from "@/components/AIGenerateDialog";

interface ContactInfoProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  categoryData: Record<string, any>;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  allData,
  setAllData,
  setActiveTab,
  categoryData
}) => {

  console.log("categoryData->", categoryData)

  const form = useForm({
    resolver: zodResolver(ContactInfoSchema),
    defaultValues: {
      firstName: categoryData?.firstName || allData.firstName || "",
      lastName: categoryData?.lastName || allData.lastName || "",
      jobTitle: categoryData?.jobTitle || allData.jobTitle || "",
      phone: categoryData?.phone || allData.phone || "",
      email: categoryData?.email || allData.email || "",
      country: categoryData?.country || allData.country || "",
      city: categoryData?.city || allData.city || "",
      postalCode: categoryData?.postalCode || allData.postalCode || "",
      summary: categoryData?.summary || allData.summary || "",
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = form;

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setAllData({ ...allData, [field]: value });
  };

  const handleSubmitContactDetails = (values: z.infer<typeof ContactInfoSchema>) => {
    console.log("Form Submitted", values);
    setAllData({ ...allData, ...values });
    console.log("Updated AllData:", { ...allData, ...values });
    setActiveTab("experience");
  };

  const prompt = `Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 1 - 2 lines in array format, with summary in JSON Format. Format should be like 
  [
    {
      id : "",
      summary : ""
  }] `

  const generateSummaryFromAI = async () => {
    setIsAnalyzing(true);
    const PROMPT = prompt.replace('{jobTitle}', allData?.jobTitle);
    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const parsedResult = JSON.parse(result.response.text());
      console.log("paresedResult-->", parsedResult)
      const summaries = parsedResult && parsedResult.map((item: any) => item.summary);
      setSuggestions(summaries);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error generating AI suggestions:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue("summary", suggestion);
    setAllData({ ...allData, summary: suggestion });
    setShowSuggestions(false);
  };

  const handleAcceptAll = () => {
    const combinedSummary = suggestions.join(" ");
    setValue("summary", combinedSummary);
    setAllData({ ...allData, summary: combinedSummary });
    setShowSuggestions(false);
  };

  useEffect(() => {
    const formFields = [
      'firstName', 'lastName', 'jobTitle', 'phone', 'email',
      'country', 'city', 'postalCode', 'summary'
    ];

    formFields.forEach((field: any) => {
      const value = categoryData?.[field] || allData[field] || "";
      setValue(field, value);
    });
  }, [categoryData, allData, setValue]);


  console.log("allData>>", allData)

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-8 lg:gap-5"
          onSubmit={handleSubmit(handleSubmitContactDetails)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* First Name */}
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <Input
                  label="First Name"
                  variant="bordered"
                  isInvalid={!!errors.firstName}
                  errorMessage={errors.firstName?.message?.toString()}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("firstName", e.target.value);
                  }}
                />
              )}
            />
            {/* Last Name */}
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <Input
                  label="Last Name"
                  variant="bordered"
                  isInvalid={!!errors.lastName}
                  errorMessage={errors.lastName?.message?.toString()}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("lastName", e.target.value);
                  }}
                />
              )}
            />
          </div>

          {/* Job Title */}
          <div className="grid grid-cols-1 gap-3">
            <FormField
              control={control}
              name="jobTitle"
              render={({ field }) => (
                <Input
                  label="Job Title"
                  variant="bordered"
                  isInvalid={!!errors.jobTitle}
                  errorMessage={errors.jobTitle?.message?.toString()}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("jobTitle", e.target.value);
                  }}
                />
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Phone */}
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  label="Phone"
                  variant="bordered"
                  isInvalid={!!errors.phone}
                  errorMessage={errors.phone?.message?.toString()}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("phone", e.target.value);
                  }}
                />
              )}
            />
            {/* Email */}
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  label="Email"
                  type="email"
                  variant="bordered"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message?.toString()}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("email", e.target.value);
                  }}
                />
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Country */}
            <FormField
              control={control}
              name="country"
              render={({ field }) => (
                <Input
                  label="Country"
                  variant="bordered"
                  isInvalid={!!errors.country}
                  errorMessage={errors.country?.message?.toString()}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("country", e.target.value);
                  }}
                />
              )}
            />
            {/* City */}
            <FormField
              control={control}
              name="city"
              render={({ field }) => (
                <Input
                  label="City"
                  variant="bordered"
                  isInvalid={!!errors.city}
                  errorMessage={errors.city?.message?.toString()}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("city", e.target.value);
                  }}
                />
              )}
            />
            {/* Postal Code */}
            <FormField
              control={control}
              name="postalCode"
              render={({ field }) => (
                <Input
                  label="Postal Code"
                  variant="bordered"
                  isInvalid={!!errors.postalCode}
                  errorMessage={errors.postalCode?.message?.toString()}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("postalCode", e.target.value);
                  }}
                />
              )}
            />
          </div>

          <div>
            <div className="flex justify-end">
              <Button
                size="sm"
                radius="sm"
                className="font-bold bg-black text-white mb-1"
                variant="faded"
                onClick={generateSummaryFromAI}
              >
                <Brain /> Generate with AI
              </Button>
            </div>
            <FormField
              control={control}
              name="summary"
              render={({ field }) => (
                <Textarea
                  className={`textarea-bordered bg-[#F7F7F8] w-full p-2 border-2 rounded-lg ${errors.summary ? 'border-red-500' : ''
                    }`}
                  placeholder="Enter a brief summary"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange("summary", e.target.value);
                  }}
                />
              )}
            />
          </div>

          <div className="flex items-center justify-end mt-10">
            <Button
              radius="sm"
              className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
              variant="faded"
              type="submit"
            >
              Next to Experience <span className="pl-2">&#x2192;</span>
            </Button>
          </div>
        </form>
      </Form>

      <AIGenerateDialog
        isAnalyzing={isAnalyzing}
        showSuggestions={showSuggestions}
        suggestions={suggestions}
        onClose={() => setShowSuggestions(false)}
        onSuggestionClick={handleSuggestionClick}
        onAcceptAll={handleAcceptAll}
      />

    </Card>
  );
};

