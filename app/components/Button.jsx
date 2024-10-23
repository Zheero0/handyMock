"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../authContext";

export default function Button(props) {
  const { text, dark, full, url, onclick } = props;
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
        "rounded-full overflow-hidden duration-200 hover:opacity-60  " +
        (dark
          ? "text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 "
          : "text-blue-500 ") +
        (full ? "grid place-items-center w-full" : " ")
      }
    >
      {buttonContent}
    </button>
  );
}
