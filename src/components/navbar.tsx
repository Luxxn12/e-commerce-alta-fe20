import React, { useState } from "react";
import ApplicationLogo from "./application-logo";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-lightGray">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <a className="flex items-center rtl:space-x-reverse">
          <ApplicationLogo width="70" height="70" />
          <span className="self-center text-neutral-600 text-md font-semibold whitespace-nowrap dark:text-white">
            Toko Gadjet
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
