import { useAuth } from "@/hooks/useAuth";
import { ResetPasswordSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { NavLink } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;
const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user, resetPassword } = useAuth();
  const { toast } = useToast();

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: user?.email || "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleReset = async (values: ResetPasswordFormData) => {
    setIsLoading(true);
    try {
      await resetPassword(values.email);
      setTimeout(() => {
        setIsLoading(false);
        console.log(values);
        toast({
          title: "Email Sent",
          description: "Check your email to reset your password",
        });
      }, 3000);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Unable to sent email right now",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex-col flex items-center justify-center ">
      <div className="mb-5 w-full">
        <h2 className="md:text-3xl text-5xl md:mb-2 font-semibold mb-5">
          Password Recovery
        </h2>
        <p className="text-secondary-text mb-5 text-sm">
          Password recovery Please fill in the email you've used to create a
          Camel Cloud account and we'll send you a reset link
        </p>
      </div>
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-8 lg:gap-5"
          onSubmit={handleSubmit(handleReset)}
        >
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className=" relative  items-center lg:gap-3">
                {/* <FormLabel>Email</FormLabel> */}
                <div className="w-full ">
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      type="email"
                      label="Email"
                      errorMessage={errors.email?.message}
                      isInvalid={!!errors.email?.message}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                </div>
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between mt-10">
            <div>
              If password is reset.
              <NavLink
                to={"/login"}
                className={
                  "text-button-gpt font-semibold hover:underline transition-all"
                }
              >
                {" "}
                Login here
              </NavLink>
            </div>
            <Button
              radius="sm"
              className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
              isLoading={isLoading}
              variant="faded"
              type="submit"
            >
              Send Email
            </Button>
          </div>
        </form>
      </Form>
      <Separator className="mt-10" />
      <div className="flex mt-10 items-center gap-2">
        <p>
          Login{" "}
          <NavLink
            className={
              "text-button-gpt font-bold hover:underline transition-all"
            }
            to={"/create-account"}
          >
            Here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
