"use client"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { jobListings } from "../utils/jobLists";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedRate, setSelectedRate] = useState("");

  // Function to handle search button click
  const handleSearch = () => {
    const filteredJobs = jobListings
      // Filter by job title
      .filter(
        (job) =>
          searchTerm === "" ||
          job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      // Filter by location
      .filter(
        (job) =>
          selectedLocation === "" ||
          job.location.toLowerCase() === selectedLocation.toLowerCase()
      )
      // Filter by rate (rate must be less than or equal to the selected rate)
      .filter((job) => selectedRate === "" || job.rate <= selectedRate)
      // Sort by relevance (based on job title first, then location, then rate)
      .sort((a, b) => {
        if (
          searchTerm &&
          a.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !b.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return -1;
        }
        if (
          selectedLocation &&
          a.location.toLowerCase() === selectedLocation.toLowerCase() &&
          b.location.toLowerCase() !== selectedLocation.toLowerCase()
        ) {
          return -1;
        }
        if (selectedRate && a.rate < b.rate) {
          return -1;
        }
        return 0;
      });

    console.log("Filtered and sorted jobs:", filteredJobs);
    // Do something with the sorted `filteredJobs`, like displaying them
  };

  return (
    <div className="flex justify-center items-center bg-white border border-gray-200 rounded-full shadow-md p-2 md:p-4 space-x-4 ">
      {/* Search Bar */}
      <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200 ">
        <label className="text-xs font-semibold ml-5 text-gray-600 ">
          Job Title
        </label>
        <input
          type="text"
          placeholder="Search Jobs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full text-black bg-transparent  focus:outline-none "
        />
      </div>

      {/* Location Dropdown */}
      <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200 ">
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

      {/* Rates Dropdown */}
      <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200 ">
        <label className="text-xs font-semibold ml-4 text-gray-600 ">
          Rate
        </label>
        <select
          value={selectedRate}
          onChange={(e) => setSelectedRate(e.target.value)}
          className="w-full px-4 py-2 rounded-full bg-transparent focus:outline-none"
        >
          <option value="">Any</option>
          <option value="10">£10</option>
          <option value="20">£20</option>
          <option value="50">£50</option>
          <option value="100">£100</option>
          <option value="200">£200+</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="relative ">
        <button
          onClick={handleSearch}
          className="p-2 md:p-5 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
