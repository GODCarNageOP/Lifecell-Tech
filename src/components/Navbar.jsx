import React, { useState } from "react";
import Img from "../assets/react.svg";
import { Divide as Hamburger } from "hamburger-react";
import {FcMenu} from "react-icons/fc"
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  return (

    <>
      <nav className="w-full md:w-full sm:w-full bg-[#C10A39] shadow">
        <div className="justify-between px-4 mx-auto md:w-full lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <img src={Img} alt="logo" className="w-12 h-12"/>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none :border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}

                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg">
                <li className="text-white hover:text-indigo-200">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link href="/products">Products</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link href="/aboutus">About Us</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link href="/contactus">Contact Us</Link>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <Link
                        href="/login"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
                    >
                        Register
                    </Link>
                </div>


              {/* <div className="mt-3 space-y-2 lg:hidden md:inline-block border-white rounded-md " onClick={handleClick}>
                <Hamburger size={22} color="white" />
              </div> */}
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
                    <Link
                        href="/login"
                        className="px-4 py-2 text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="px-4 py-2 text-white bg-[#b90434] rounded-md shadow hover:bg-[#a3485f]"
                    >
                        Register
                    </Link>
                </div>
  
        </div>
      </nav>
    </>
  );
};

export default Navbar;
