import React, { useEffect, useState } from "react";
import ApplicationLogo from "./application-logo";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/apis/contexts/token";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage } from "./ui/avatar";
import { UserProfile } from "../utils/apis/user/type";
import { getUserProfile } from "../utils/apis/user/api";

import userProfileImage from "../assets/icons8-male-user-48.png";

const Navbar: React.FC = () => {
  const { token, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUserProfile(profile.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-lightGray">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <a className="flex items-center rtl:space-x-reverse" href="/">
          <ApplicationLogo width="70" height="70" />
          <span className="self-center text-neutral-600 text-md font-semibold whitespace-nowrap dark:text-white">
            Toko <br /> Gadget
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          {/* untuk responsive belum dihandle karena belum ada isLoggin */}
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {token ? (
              <>
                <Link
                  to="/cart"
                  className="flex items-center justify-center lg:-mr-4 md:-mr-4 mt-1"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#373A40"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </g>
                  </svg>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="">
                    <Avatar>
                      <AvatarImage
                        src={userProfileImage}
                        alt={userProfile?.fullname}
                      />
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-48"
                    align="end"
                    forceMount
                    style={{ pointerEvents: "auto", marginTop: "8px" }}
                  >
                    <DropdownMenuLabel>
                      Hi! {userProfile?.fullname}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link to="/">Dashboard</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/my-transaction">My transaction</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/profile">Edit profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <button onClick={logout}>logout</button>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <li className="hidden lg:block md:block items-center space-x-2">
                <Link
                  to="/login"
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  Sign in
                </Link>
                <span className="text-neutral-500">|</span>
                <Link
                  to="/register"
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  Sign up
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
