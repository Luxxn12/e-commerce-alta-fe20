import AppLayout from "../../layouts/app-layout";
import profilePicture from "../../assets/icons8-male-user-48.png";
import { Input } from "../../components/ui/input";

const Profile = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="flex justify-center lg:py-16 md:py-10 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-1 sm:col-span-1 lg:col-span-1">
              <div className="bg-white shadow shadow-neutral-400 rounded-md px-10 py-6 text-center">
                <img
                  src={profilePicture}
                  alt="profile-picture"
                  className="mx-auto"
                  width={150}
                  height={150}
                  loading="lazy"
                />
                <p className="text-neutral-600 font-semibold">username</p>
                <p className="text-neutral-500">email@gmail.com</p>
                <button
                  type="button"
                  className="mt-4 focus:outline-none text-white bg-rose-700 hover:bg-rose-800 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2"
                >
                  Delete acount
                </button>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="bg-white shadow shadow-neutral-400 rounded-md p-6">
                <h5 className="text-xl font-semibold text-neutral-700">
                  Edit profile
                </h5>
                <div className="mt-4">
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
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-neutral-500"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="bg-transparent border border-neutral-500 text-neutral-700 text-sm rounded-lg block w-full p-2.5"
                    placeholder="+628xxxxxxx"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Adress
                  </label>
                  <textarea
                    id="address"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-neutral-700 bg-transparent rounded-lg border border-neutral-500"
                    placeholder="Abbey road..."
                    defaultValue={""}
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="profilePicture"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Profile picture
                  </label>
                  <Input id="picture" type="file" />
                </div>
                <button
                  type="button"
                  className="mt-4 focus:outline-none text-lightGray bg-darkGray hover:bg-darkGray/80 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
