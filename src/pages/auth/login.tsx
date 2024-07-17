import { useState } from "react";
import AppLayout from "../../layouts/app-layout";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema, LoginSchema } from "../../utils/apis/auth/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userLogin } from "../../utils/apis/auth/api";
import { useAuth } from "../../utils/apis/contexts/token";

const Login = () => {
  const { setToken, addNotification } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    setIsLoading(true);
    try {
      const response = await userLogin(data);
      setToken(response.data.token);
      addNotification(response.message, "success");
      navigate("/");
    } catch (error: any) {
      addNotification(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AppLayout>
      <div className="flex justify-center lg:pt-28 lg:px-0 px-4 py-8">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-semibold text-neutral-700">Sign in</h1>
          <span className="text-sm text-neutral-500">
            Sign in to Easily Purchase Your Favorite Gadgets.
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6">
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
                <p className="text-rose-500 text-sm mt-1">
                  {errors.email.message}
                </p>
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
                <p className="text-rose-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="block mt-6">
              <button
                type="submit"
                disabled={isLoading} // Disable button when loading
                className={`text-white bg-darkGray hover:bg-darkGray/80 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Logging in..." : "Submit"}
              </button>
            </div>
          </form>

          <div className="flex justify-end mt-4">
            <Link
              to="/register"
              className="text-sm text-neutral-500 hover:text-neutral-700"
            >
              Don't have an account yet?
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;
