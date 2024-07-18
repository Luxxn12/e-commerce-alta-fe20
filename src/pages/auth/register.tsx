import { Link, useNavigate } from "react-router-dom";
import AppLayout from "../../layouts/app-layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "../../utils/apis/auth/type";
import { userRegister } from "../../utils/apis/auth/api";
import { useAuth } from "../../utils/apis/contexts/token";

const Register = () => {
  const { addNotification } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      repassword: "",
    },
  });

  async function onSubmit(data: RegisterSchema) {
    setIsLoading(true);
    try {
      const response = await userRegister(data);
      addNotification(response.message, "success");
      navigate("/login");
    } catch (error: any) {
      addNotification(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AppLayout>
      <div className="flex justify-center lg:pt-16 lg:px-0 px-4 py-8">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-semibold text-neutral-700">Sign up</h1>
          <span className="text-sm text-neutral-500">
            Sign up to Easily Purchase Your Favorite Gadgets.
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-neutral-500"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                className="bg-transparent border border-neutral-500 text-neutral-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="John Doe"
                {...register("full_name")}
              />
              {errors.full_name && (
                <p className="text-red-500 text-sm">
                  {errors.full_name.message}
                </p>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-neutral-500"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border border-neutral-500 text-neutral-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="john.doe@company.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-neutral-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-transparent border border-neutral-500 text-neutral-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="**********"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-neutral-500"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="bg-transparent border border-neutral-500 text-neutral-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="**********"
                {...register("repassword")}
              />
              {errors.repassword && (
                <p className="text-red-500 text-sm">
                  {errors.repassword.message}
                </p>
              )}
            </div>
            <div className="block mt-6">
              <button
                type="submit"
                disabled={isLoading} // Disable button when loading
                className={`text-white bg-darkGray hover:bg-darkGray/80 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {isLoading ? "Please wait..." : "Submit"}
              </button>
            </div>
          </form>
          <div className="flex justify-end mt-4">
            <Link
              to="/login"
              className="text-sm text-neutral-500 hover:text-neutral-700"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Register;
