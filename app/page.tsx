"use client";

import React, { useState } from "react";
import logo from "../public/loginIcons/logo.svg";
import loginIcon from "../public/loginIcons/login.svg";
import loginButtonIcon from "../public/loginIcons/loginButton.svg";
import forgetLogo from "../public/loginIcons/forgetIcon.svg";
import poster from "../public/loginIcons/poster.svg";
import diamondIcon from "../public/loginIcons/diamondIcon.svg";
import eyeIcon from "../public/loginIcons/eyeIcon.svg";
import { Roboto, Lato } from "next/font/google";
import Link from "next/link";
import arrowIcon from "../public/loginIcons/arrowIcon.png";
import panda from "../public/loginIcons/PandaLogo.png";
import eyeCloseIcon from "../public/loginIcons/eyeCloseIcon.svg";
import { useRouter } from 'next/router';


const lato700 = Lato({ weight: "400", subsets: ["latin"] });
const roboto500 = Roboto({
  weight: "400",
  subsets: ["greek"],
});

export default function Login() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleUserID = (e: any) => {
    setUserID(e.target.value.trim());
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value.trim());
  };

  const handleSubmit = () => {
    if (userID === "") {
      setMessage("please enter the user ID");
      return;
    }
    if (password === "") {
      setMessage("please enter the password");
      return;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    router.push('/register-user');
  };

  return (
    <div className="w-full flex justify-center">
      <main
        className={`flex flex-col items-center  h-auto lg:w-3/4 w-9/12 mb-10 text-[#664841] ${lato700.className}`}
      >
        <div className="w-full h-16 flex items-center justify-between lg:m-10 sm:m-5">
          <h1
            className={`font lg:text-3xl sm:text-2xl  ${roboto500.className}`}
          >
            Login
          </h1>
          <div className="hidden sm:hidden md:hidden lg:block">
            <img src={logo.src} alt="Logo" />
          </div>
          <div className={`lg:hidden ${roboto500.className}`}>
            <a href="">Register Now</a>
          </div>
        </div>
        <div className="lg:w-4/5 w-full flex gap-5 flex-col justify-center items-center ">
          <div>
            <p className="text-red-500">{message}</p>
          </div>
          <div className="w-full py-10 gap-5 bg-[#FEF5F8] flex flex-col justify-center items-center  ">
            <div className="lg:w-1/2 flex flex-col gap-4 md:w-8/12 w-9/12 ">
              <div className="flex items-center">
                <img className="lg:h-10 h-7" src={loginIcon.src} alt="Logo" />
                <label
                  className={`px-3 font-semibold lg:text-lg text-sm`}
                  htmlFor=""
                >
                  Login ID
                </label>
              </div>
              <input
                type="text"
                className="p-2 w-full border-2 border-[#A59E9E]-500 outline-none lg:text-lg text-sm"
                placeholder="Please enter your ID"
                onChange={handleUserID}
              />
              <div className="flex items-center">
                <img src={loginIcon.src} className="lg:h-10 h-7" alt="Logo" />
                <label
                  htmlFor=""
                  className={`px-3 font-semibold lg:text-lg text-sm `}
                >
                  Password
                </label>
              </div>
              <div className="w-full relative flex">
                <input
                  onChange={handlePassword}
                  type={showPassword ? "text" : "password"}
                  className="p-2 w-full border-2 border-[#A59E9E]-500 outline-none lg:text-lg text-sm"
                  placeholder="Please enter your password"
                />
                <img
                  src={showPassword ? eyeIcon.src : eyeCloseIcon.src}
                  alt=""
                  className="bg-white pl-2 pr-2 absolute right-1 lg:h-7 md:h-7 h-5 top-1/4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="flex bg-[#D7ECF8] hover:bg-[#e6f0f5] py-2 px-14 gap-4 items-center"
          >
            <p className={`text-lg font-semibold ${lato700.className} `}>
              Login
            </p>
            <img src={loginButtonIcon.src} className="h-5 lg:h-7 md:h-7 " alt="Logo" />
          </button>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img className="lg:h-7 md:h-7 h-5" src={forgetLogo.src} alt="" />
              <Link href="/forget-id">
                <p className="lg:text-lg md:text-sm text-xs">
                  Click here if you forgot your ID
                </p>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <img className="lg:h-7 md:h-7 h-5" src={forgetLogo.src} alt="" />
              <Link href="/forget-password">
              <p className="lg:text-lg md:text-sm text-xs">
                Click here if you forgot your password
              </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full relative border-2 rounded-lg border-dashed border-pink-300 my-10">
          <img
                  src={panda.src}
                  alt=""
                  className="absolute w-[25%] top-[8%] pl-5 lg:block md:block hidden"
                />
            <div className="bg-pink-50 min-h-20 rounded-t-lg flex item-center p-2 lg:justify-end md:justify-end">
              <div className="flex lg:flex-row w-full lg:w-[70%] md:w-[70%] items-center gap-5 ">
                <img
                  src={panda.src}
                  alt=""
                  className="h-16 pl-5 lg:hidden md:hidden"
                />
                <div className="flex lg:flex-row md:flex-row lg:justify-evenly md:justify-evenly flex-col w-full">
                  <h1 className="sm:text-xs lg:text-2xl text-sm font-semibold ">
                    If you are using it for the first time
                  </h1>
                  <a
                    href=""
                    className="text-red-500 font-semibold lg:text-lg text-sm md:text-sm"
                  >
                    Register here
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 min-h-20 rounded-b-lg flex lg:justify-end md:justify-end items-center">
              <div className="w-full lg:w-[70%] md:w-[70%] mx-4 p-5 flex flex-col items-center justify-center bg-white h-4/5 border-2 rounded-lg border-red-400">
                <p className="lg:text-lg md:text-md text-xs ">
                  Various benefits exclusive to San-X online shop members!
                </p>
                <p className="lg:text-lg md:text-md text-xs ">
                  We also offer benefits unique to San-X's official mail order
                  site.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-full grid lg:grid-cols-2 lg:gap-4  md:w-full md:grid-cols-1  sm:w-full sm:grid-cols-1">
            <div className="p-5 bg-[#FEF5F8] flex items-center justify-between w-[100%]">
              <div className="flex items-center w-full">
                <img
                  src={diamondIcon.src}
                  alt=""
                  className="h-4 lg:h-7 md:h-7 "
                />
                <p className="ml-4 lg:text-lg md:text-sm text-xs">
                  Point discount service
                </p>
              </div>
              <div>
                <img className="h-5" src={arrowIcon.src} alt="arrowicon" />
              </div>
            </div>
            <div className="p-5 bg-[#FEF5F8] flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={diamondIcon.src}
                  alt=""
                  className="h-4 lg:h-7 md:h-7 "
                />
                <p className="ml-4 lg:text-lg md:text-sm text-xs">
                  Point exchange limited goods
                </p>
              </div>
              <div>
                <img className="h-5" src={arrowIcon.src} alt="arrowicon" />
              </div>
            </div>
            <div className="p-5 bg-[#FEF5F8] flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={diamondIcon.src}
                  alt=""
                  className="h-4 lg:h-7 md:h-7 "
                />
                <p className="ml-4 lg:text-lg md:text-sm text-xs">
                  Application campaign
                </p>
              </div>
              <div className="w-7">
                <img className="h-5" src={arrowIcon.src} alt="arrowicon" />
              </div>
            </div>
            <div className="p-5 bg-[#FEF5F8] flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={diamondIcon.src}
                  alt=""
                  className="h-4 lg:h-7 md:h-7 "
                />
                <p className="ml-4 lg:text-lg md:text-sm text-xs">
                  Make shopping convenient! My page function
                </p>
              </div>
              <div className="w-7">
                <img className="h-5 w-10" src={arrowIcon.src} alt="arrowicon" />
              </div>
            </div>
          </div>
          <button   className="bg-[#D7ECF8] hover:bg-[#e6f0f5] py-5 px-4 flex items-center justify-between lg:text-lg md:text-md text-xs">
            <p>Register as a new member</p>
            <div>
              <img className="h-5" src={arrowIcon.src} alt="arrowicon" />
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
