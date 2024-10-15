"use client";
import React, { useState } from "react";
import Button from "./Button";
import JobListings from "./JobListings";
import ActionSelector from "./ActionSelector";
import PostJobForm from "./PostJobForm"; // Component for posting jobs
import "@fontsource/lato"; // Defaults to weight 400
import "@fontsource/lato/700.css"; // For bold
import { FaSearch } from "react-icons/fa";
import { jobListings } from "../utils/jobLists";
import ToggleAuth from "./ToggleAuth";


export default function Hero() {
  const [selectedAction, setSelectedAction] = useState("findJob");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRate, setSelectedRate] = useState("");

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    
    
  // Handle the action change (Find Job or Post Job)
  const handleActionChange = (action) => {
    setSelectedAction(action);
  };

  const fontLato = {
    fontFamily: "Lato, sans-serif",
  };

  return (
    <div className="py-4 md:py-10 flex flex-col font-lato items-center gap-8 sm:gap-10">
      <div className="px-3 flex flex-col mx-auto font-medium items-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-center md:max-w-[900px] mb-2">
          Find Skilled Professionals for Every Task
        </h1>
        <h3 className="text-[1rem] sm:text-lg tracking-[1px] font-lato font-normal md:text-xl text-center max-w-[400px] sm:max-w-[500px] md:max-w-[700px]">
          Empowering Connections - Freedom to Earn
        </h3>
      </div>

      {/* Action Selector (Find Job / Post Job) */}
      <ActionSelector
        selectedAction={selectedAction}
        onActionChange={handleActionChange}
      />

      {/* Conditionally render SearchBar or PostJobForm */}
      {selectedAction === "findJob" ? (
        <>
          {/* Search Bar */}
          <div className="flex justify-center items-center bg-white border border-gray-200 rounded-full shadow-md p-2 md:p-4 space-x-4">
            {/* Job Title Input */}
            <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
              <label className="text-xs font-semibold ml-5 text-gray-600">
                Job Title
              </label>
              <input
                type="text"
                placeholder="Search Jobs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-full text-black bg-transparent focus:outline-none"
              />
            </div>{" "}
            {/* Postcode Input */}
            <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
              <label className="text-xs font-semibold ml-5 text-gray-600">
                Address
              </label>
              <input
                type="text"
                placeholder="Search Area"

                className="w-full px-4 py-2 rounded-full text-black bg-transparent focus:outline-none"
              />
            </div>

            {/* Location Dropdown */}
            <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
              <label className="text-xs font-semibold text-gray-600 ml-5">
                Radius
              </label>
              <select
                className="w-full px-4 py-2 rounded-full bg-transparent focus:outline-none"
              >
                <option>0 Miles</option>
                <option>0-2 Miles</option>
                <option>2-5 Miles</option>
                <option>5-10 Miles</option>
                <option>10-15 Miles</option>
                <option>15-20 Miles</option>
              </select>
            </div>
                        {/* Location Dropdown */}
            <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
              <label className="text-xs font-semibold text-gray-600 ml-5">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-transparent focus:outline-none"
              >
                <option value="">Any (UK)</option>
                <option value="london">London</option>
                <option value="manchester">Manchester</option>
                <option value="birmingham">Birmingham</option>
                <option value="edinburgh">Edinburgh</option>
                <option value="liverpool">Liverpool</option>
                <option value="glasgow">Glasgow</option>
              </select>
            </div>
            {/* Rate Dropdown */}
            <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
              <label className="text-xs font-semibold ml-4 text-gray-600">
                Rate
              </label>
              <select
                value={selectedRate}
                onChange={(e) => setSelectedRate(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-transparent focus:outline-none"
              >
                <option value="">Any</option>
                <option value="10">£0-50</option>
                <option value="20">£50-100</option>
                <option value="50">£100-200</option>
                <option value="100">£200-500</option>
                <option value="200">£500+</option>
              </select>
            </div>
            {/* Search Button */}
            <div className="relative">
              <button className="p-2 md:p-5 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Job Listings filtered by search term, location, and rate */}
          <JobListings
            searchQuery={searchTerm}
            selectedLocation={selectedLocation}
            selectedRate={selectedRate}
            allJobListings={jobListings}
          />
        </>
      ) : (
        <ToggleAuth />
      )}
    </div>
  );
}
