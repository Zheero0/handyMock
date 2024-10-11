"use client"
import React from "react";

export default function ActionSelector({ selectedAction, onActionChange }) {
  return (
    <div className="relative w-[300px] h-[50px] bg-gray-200 rounded-lg p-2">
      {/* Slider */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-blue-600  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-all duration-300 ease-in-out ${
          selectedAction === "postJob" ? "translate-x-full" : ""
        }`}
      ></div>

      {/* Find Job Button */}
      <button
        onClick={() => onActionChange("findJob")}
        className={`relative w-1/2 z-10 h-full rounded-lg ${
          selectedAction === "findJob" ? "text-white" : "text-black"
        }`}
      >
        Find Job
      </button>

      {/* Post Job Button */}
      <button
        onClick={() => onActionChange("postJob")}
        className={`relative w-1/2 z-10 h-full rounded-lg ${
          selectedAction === "postJob" ? "text-white" : "text-black"
        }`}
      >
        Post Job
      </button>
    </div>
  );
}
