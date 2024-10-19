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
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const Navbar = () => {
  const { isAuthenticated, logout, login, isPro } = useAuth();

  return (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className="relative text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 before:absolute before:content-[''] before:left-[5px] before:bottom-0 before:w-1/3 before:h-1 before:bg-blue-600">
          handy
        </h1>
      </Link>
      <div className=" flex gap-6">
        <Link href={"/chat"}>
          {" "}
          <HiOutlineChat size={40} className="text-blue-600" />
        </Link>
        <Link href={"/pro"}>
          {" "}
          <MdMenuBook size={40} className="text-blue-600" />
        </Link>

        { isPro ? 
          <Link href={"/dashboard"}>
            <FiUser size={40} className="text-blue-600" /> 
          </Link> : 
          " "
        }

        {/* <Link href={"/dashboard"}>
          {isPro ? <FiUser size={40} className="text-blue-600" /> : " "}
        </Link> */}
         {isAuthenticated ?  <button onClick={logout}>
          {" "}
          <HiOutlineLogout size={40} className="text-blue-600" />
        </button> : " "}
      </div>
    </header>
  );

};

export default Navbar;
