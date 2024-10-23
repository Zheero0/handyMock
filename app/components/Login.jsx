"use client"
import { useAuth } from "../authContext";
import React from "react";


export default function Login({ showExtraHeading, text }) {
  const { login, isAuthenticated } = useAuth();

  const handleAuth = () => {
    console.log("Is Authenticated:", isAuthenticated);

    // Simulate instant login
    login();
    console.log("Logged in successfully");
  };
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4 ">
      {showExtraHeading && (
        <h1 className="text-2xl sm:text-2xl w-full max-w-[400px] mx-auto text-center md:text-2xl font-semibold">
          {text}
        </h1>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
        Login / Register
      </h2>
      <p>You&#39;re one step away from...</p>
      <input
        type="text"
        className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-blue-600  duration-200 hover:border-blue-700 focus:border-blue-400 rounded-full outline-none"
        placeholder="Email"
      />

      <input
        className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-blue-600 duration-200 hover:border-blue-700 focus:border-blue-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto flex flex-col justify-center">
        <button
          className="bg-gradient-to-l from-blue-600 via-blue-600 to-blue-400 text-white py-3 px-8 items-center place-content-center rounded-full text-2xl"
          onClick={handleAuth}
        >
          {" "}
          Submit
        </button>
      </div>
      <p>
        Don&#39;t have an account?{" "}
        <span className="text-blue-600">Sign Up</span>
      </p>
    </div>
  );
}
