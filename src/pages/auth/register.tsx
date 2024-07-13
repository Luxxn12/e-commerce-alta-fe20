import { Link } from "react-router-dom";
import AppLayout from "../../layouts/app-layout";

const Register = () => {
  return (
    <AppLayout>
      <div className="flex justify-center lg:pt-16 lg:px-0 px-4 py-8">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-semibold text-neutral-700">Sign up</h1>
          <span className="text-sm text-neutral-500">
            Sign up to Easily Purchase Your Favorite Gadgets.
          </span>
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
              placeholder="john doe"
            />
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
            />
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
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-neutral-500"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="password"
              className="bg-transparent border border-neutral-500 text-neutral-700 text-sm rounded-lg block w-full p-2.5"
              placeholder="**********"
            />
          </div>
          <div className="block mt-6">
            <button
              type="submit"
              className="text-white bg-darkGray hover:bg-darkGray/80 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-end mt-4">
            <Link
              to="/login"
              className="text-sm text-neutral-500 hover:text-neutral-700"
            >
              Already have acount?
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Register;
