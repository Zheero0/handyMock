"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../authContext";

export default function Button(props) {
  const { text, dark, full, url, onclick, font } = props;
  const { login } = useAuth();
  const buttonContent = (
    <p className={"px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3"}>{text}</p>
  );

  return url ? (
    <Link href={url} passHref>
      <button
        className={
          "rounded-full overflow-hidden duration-200 hover:opacity-60  " +
          (dark
            ? "text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 "
            : "text-blue-500 ") +
          (full ? "grid place-items-center w-full" : " ")
        }
      >
        {buttonContent}
      </button>
    </Link>
  ) : (
    <button
      className={
        "rounded-full overflow-hidden transition-all duration-[0.7s] hover:bg-gradient-to-r hover:from-blue-900 hover:via-blue-700 hover:to-blue-500 hover:scale-105 " +
        (dark
          ? "text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 "
          : "text-blue-500 ") +
        (full ? "grid place-items-center w-full" : "") +
        (font ? " text-[12px] px-0 py-0 " : "")
      }
    >
      {buttonContent}
    </button>
  );
}
