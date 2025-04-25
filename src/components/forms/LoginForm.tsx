import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";
import { LoginSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Separator } from "../ui/separator";
import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

type LoginFormData = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  // const { toast } = useToast();

  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading } = useAuth();
  
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const from = location?.state?.from?.pathname || "/";
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;


  const handleLogin = async (values: LoginFormData) => {
    try {
      await login(values.email, values.password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full flex-col flex items-center justify-center border border-black">
      <div className="mb-5 w-full">
        <h2 className="md:text-3xl text-5xl md:mb-2 font-semibold mb-5">
          Login
        </h2>
        <p className="text-secondary-text mb-5 text-xs">
          Welcome to CVGenIO, please put your login credentials below to start
          using the app
        </p>
      </div>
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-8 lg:gap-5"
          onSubmit={handleSubmit(handleLogin)}
        >
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className=" relative  items-center lg:gap-3">
                {/* <FormLabel>Email</FormLabel> */}
                <div className="w-full">
                  <FormControl>
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
                  </FormControl>
                  {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem className=" relative items-center">
                {/* <FormLabel>Password</FormLabel> */}
                <div className="w-full col-span-4">
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      label="Password"
                      errorMessage={errors.password?.message}
                      isInvalid={!!errors.password?.message}
                      {...field}
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                          aria-label="toggle password visibility"
                        >
                          {isVisible ? (
                            <EyeOpenIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                    />
                  </FormControl>
                  {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                </div>
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between mt-10">
            <div>
              <NavLink
                to={"/reset-password"}
                className={
                  "text-button-gpt font-semibold hover:underline transition-all"
                }
              >
                Forgot Password?
              </NavLink>
            </div>

            <Button
              radius="sm"
              className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
              isLoading={isLoading}
              variant="faded"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
      <Separator className="mt-10" />
      <div className="flex mt-10 items-center gap-2">
        <p>Don't have an account?</p>
        <NavLink
          className={
            "text-button-gpt font-semibold hover:underline transition-all"
          }
          to={"/create-account"}
        >
          Create Account
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
