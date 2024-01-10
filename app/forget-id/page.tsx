"use client";

import React, { useState } from "react";
import { Roboto, Lato } from "next/font/google";
import arrowIcon from "../../public/loginIcons/arrowIcon.png";
import mustIcon from "../../public/loginIcons/mustIcon.svg";

const lato700 = Lato({ weight: "400", subsets: ["latin"] });
const roboto500 = Roboto({
  weight: "400",
  subsets: ["greek"],
});

export default function ForgetPassword() {
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [phoneNumber3, setPhoneNumber3] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handlePhoneNumber1 = (e: any) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only digits
    setPhoneNumber1(value.substring(0, 3));
    setPhoneNumberError("");
  };

  const handlePhoneNumber2 = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber2(value.substring(0, 4));
    setPhoneNumberError("");
  };

  const handlePhoneNumber3 = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber3(value.substring(0, 4));
    setPhoneNumberError("");
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSendEmail = () => {
    if (
      phoneNumber1.length !== 3 ||
      phoneNumber2.length !== 4 ||
      phoneNumber3.length !== 4
    ) {
      setPhoneNumberError("Please enter valid phone numbers.");
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }
    if (
      phoneNumber1.length === 3 &&
      phoneNumber2.length === 4 &&
      phoneNumber3.length === 4 &&
      validateEmail(email)
    ) {
      setPhoneNumberError(""); // Clear phone number error
      setEmailError(""); // Clear email error
    }
  };

  const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div
        className={`w-full flex flex-col items-center ${lato700.className} text-[#664841] text-sm`}
      >
        <div className="w-4/5 flex flex-col gap-10 items-center divide-y-2 divide-gray-300 text-[#664841] mb-[100px]">
          <div className="w-full flex flex-col mt-10 gap-10">
            <h1
              className={`text-xl font-semibold ${roboto500.className} font-bold `}
            >
              ID inquiry
            </h1>
            <div>
              <p>
                Please enter your registered phone number and email address to
                confirm your identity
              </p>
              <p>Your ID will be sent to your registered email address</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 pt-10">
            <div className="flex gap-3 items-center">
              <p className="font-bold">Your phone number</p>
              {phoneNumberError.length ? (
                <img src={mustIcon.src} alt="" className="h-4 lg:h-7 md:h-7" />
              ) : (
                ""
              )}
            </div>
            <p>Please enter in half width number</p>
            <div className="flex flex-col gap-2">
              <div className="flex lg:gap-10 md:gap-7 gap-4">
                <input
                  type="text"
                  placeholder="000"
                  className="px-3 py-2 outline-none border-2 border-[#A59E9E]-500  md:w-30 w-[60px]"
                  value={phoneNumber1}
                  onChange={handlePhoneNumber1}
                />
                <input
                  type="text"
                  placeholder="0000"
                  className="px-3 py-2 outline-none border-2 border-[#A59E9E]-500 lg:w-30 md:w-40 w-[70px]"
                  value={phoneNumber2}
                  onChange={handlePhoneNumber2}
                />
                <input
                  type="text"
                  placeholder="0000"
                  className="px-3 py-2 outline-none border-2 border-[#A59E9E]-500 lg:w-30 md:w-40 w-[70px]"
                  value={phoneNumber3}
                  onChange={handlePhoneNumber3}
                />
              </div>
              <p className="text-red-500">{phoneNumberError}</p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="font-bold">Email address</p>
              {emailError.length ? (
                <img src={mustIcon.src} alt="" className="h-4 lg:h-7 md:h-7" />
              ) : (
                ""
              )}
            </div>
            <p>
              Please enter in half width characters, including the part after@
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Example: sample@xyz.jo"
                className="px-3 py-2 outline-none border-2 border-[#A59E9E]-500 w-[70%] lg:w-[50%]"
                value={email}
                onChange={handleEmail}
              />
              <p className="text-red-500">{emailError}</p>
            </div>
            <div className="w-full flex flex-col justify-center items-center my-15 gap-10">
              <button
                className="bg-[#D6ECF8] hover:bg-[#e6f0f5] px-10 py-4 flex items-center justify-center"
                onClick={handleSendEmail}
              >
                <p>Send an email</p>
              </button>
              <button
                className="w-[160px] py-3 flex items-center justify-center border-2 border-[#664841] hover:border-[#ada4a1]"
                onClick={handleSendEmail}
              >
                <div className="w-full flex justify-evenly items-center">
                  <p>back to top page</p>
                  <img src={arrowIcon.src} alt="" className="h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
