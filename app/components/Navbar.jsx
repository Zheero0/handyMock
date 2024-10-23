// components/Navbar.js
"use client"; // This will allow you to use hooks in this component

import React from "react";
import { useAuth } from "../authContext";
import Link from "next/link";
import localFont from "next/font/local";
import { HiOutlineChat } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";
import { FaCrown } from "react-icons/fa6";
import { PiCrownDuotone } from "react-icons/pi";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const Navbar = () => {
  const { isAuthenticated, logout, login, isPro } = useAuth();

  return (
    <header className="p-2 sm:p-6 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className="relative text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 before:absolute before:content-[''] before:left-[5px] before:bottom-0 before:w-1/3 before:h-1 before:bg-blue-600">
          handy
        </h1>
      </Link>
      <div className=" flex gap-6 ">
        <Link
          href={"/chat"}
          className="flex flex-col items-center duration-[0.3s] hover:scale-110"
        >
          {" "}
          <HiOutlineChat size={30} className="text-blue-600" />
          <p className="text-blue-600">Chat</p>
        </Link>
        <Link
          href={"/directory"}
          className="flex flex-col items-center duration-[0.3s] hover:scale-110"
        >
          {" "}
          <LiaUsersSolid size={30} className="text-blue-600" />
          <p className="text-blue-600">Directory</p>
        </Link>

        <Link
          href={"/dashboard"}
          className="flex flex-col items-center duration-[0.3s] hover:scale-110"
        >
          <FiUser size={30} className="text-blue-600" />
          <p className="text-blue-600">Profile</p>
        </Link>
        {isPro ? (
          " "
        ) : (
          <Link
            href={"/go-pro"}
            className="flex flex-col items-center duration-[0.3s] hover:scale-110"
          >
            <FaCrown size={30} className="text-blue-600" />
            <p className="text-blue-600">Go Pro</p>
          </Link>
        )}

        {/* <Link href={"/dashboard"}>
          {isPro ? <FiUser size={40} className="text-blue-600" /> : " "}
        </Link> */}
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="flex flex-col items-center duration-[0.3s] hover:scale-110"
          >
            {" "}
            <HiOutlineLogout size={30} className="text-blue-600" />
            <p className="text-blue-600">Logout</p>
          </button>
        ) : (
          " "
        )}
      </div>
    </header>
  );

};

export default Navbar;
