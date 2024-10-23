"use client";
import React, { useState } from "react";

import Button from "./Button";
import { CiBookmark } from "react-icons/ci";
import { proMembersList } from "../utils/proMembers";
import MapComponent from "./MapComponent";
import { FaSearch } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function ProListings() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // State to hold filtered job listings
  const [filteredJobs, setFilteredJobs] = useState(proMembersList);

  // Calculate total pages based on filtered jobs
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  // Get current jobs to display based on the page
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Navigation functions
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // State to handle selected job, modal visibility, and index
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open modal when a card is clicked
  const openModal = (index) => {
    setSelectedJob(currentJobs[index]);
    setSelectedIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setSelectedJob(null);
    setSelectedIndex(null);
  };

  // Navigate to the next job in the list
  const nextJob = () => {
    if (selectedIndex !== null) {
      const nextIndex = (selectedIndex + 1) % currentJobs.length;
      setSelectedJob(currentJobs[nextIndex]);
      setSelectedIndex(nextIndex);
    }
  };

  // Navigate to the previous job in the list
  const prevJob = () => {
    if (selectedIndex !== null) {
      const prevIndex =
        (selectedIndex - 1 + currentJobs.length) % currentJobs.length;
      setSelectedJob(currentJobs[prevIndex]);
      setSelectedIndex(prevIndex);
    }
  };

  // Close modal when clicking outside of it
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col flex-1 justify-center">
      <div className="text-center py-3 mb-1">
        <h1 className="text-5xl font-bold  mb-4">
          Connect with Verified Pro Users
        </h1>
        <p className="text-lg text-gray-700 mb-1">
          Find and hire top-rated professionals for your next project.
          <br /> Our Pro members offer premium services, with direct contact
          options to get started on your job today!
        </p>
      </div>

      <div className="flex flex-col justify-center mx-auto text-center items-center mb-8 w-full">
        <p className="text-2xl font-semibold mb-3">
          Want to reach more customers and increase monthly revenue?
        </p>
        <Link
          className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center text-center text-2xl text-white   py-4 px-5 rounded-full w-full max-w-[350px] duration-200 hover:scale-105 hover:opacity-80"
          href={"/pro-sign-up"}
        >
          Join the directory{" "}
          <span className="ml-2">
            <FaList />
          </span>
        </Link>
      </div>
      {/* {" search inpt"} */}
      <div className="flex flex-col justify-center mx-auto mb-4">
        <div className="flex justify-center items-center max-w-[1000px] w-full bg-white border border-gray-200 rounded-full shadow-md p-2 md:p-4 space-x-4">
          {/* Job Title Input */}
          <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
            <label className="text-xs font-semibold ml-5 text-gray-600">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Search Jobs"
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
              placeholder="Search Postcode"
              className="w-full px-4 py-2 rounded-full text-black bg-transparent focus:outline-none"
            />
          </div>
          {/* Location Dropdown */}
          <div className="flex flex-col rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
            <label className="text-xs font-semibold text-gray-600 ml-5">
              Radius
            </label>
            <select className="w-full px-4 py-2 rounded-full bg-transparent focus:outline-none">
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
            <select className="w-full px-4 py-2 rounded-full bg-transparent focus:outline-none">
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
            <select className="w-full px-4 py-2 rounded-full bg-transparent focus:outline-none">
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
            <button className="p-2 md:p-5 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 rounded-full text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentJobs.map((job, index) => (
          <div
            key={index}
            onClick={() => {
              openModal(index);
            }}
            className="rounded-xl bg-transparent flex flex-col justify-between m-2 max-w-[400px] sm:max-w-[500px] md:max-w-[300px] relative transition-transform duration-300 transform hover:scale-105"
          >
            {/* Image at the top */}
            <img
              src={job.imageUrl}
              alt={job.title}
              className="w-[500px] h-[300px] md:h-[340px] object-cover rounded-[1.5rem] relative"
            />

            {/* Card content */}
            <div className="px-0 md:text-md relative">
              {/* Blue strip for rate */}
              <div
                onClick={() => {
                  openModal(index);
                }}
                className="absolute shadow-lg top-[-320px] right-[-12px]  p-2 w-[100px] h-[50px] bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 flex items-center justify-center rounded-full duration-200 hover:scale-110 hover:cursor-pointer"
              >
                <span className="text-white text-2xl flex items-center font-extrabold tracking-[0.7px]">
                  <FaHeart className="inline-block mr-1" size={25} />
                  {job.reviews}
                </span>
              </div>
              <div className="flex justify-between m-0">
                {" "}
                {/* Adjust padding-top for content */}
                <div>
                  <h3 className="pt-1 mb-0 md:text-md font-semibold ">
                    {job.name}
                  </h3>
                  <p className="text-sm font-medium mb-1">{job.title}</p>
                </div>
                <button className="cursor-pointer transition-transform duration-300 transform hover:scale-125 p-[0.2rem] pb-[0.3rem] pt-[0.5rem] pr-0">
                  <CiBookmark className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <p className="text leading-tight">{job.description}</p>
              <p>
                <span className="font-bold">Location: </span>
                {job.location}
              </p>
              <p className="font-bold">
                Rate: <span className="text-blue-500">{"£" + job.rate}</span>
              </p>
              <button
                onClick={() => openModal(index)}
                className="mt-2  rounded-full p-1 px-3 text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 duration-200 hover:opacity-70 hover:scale-110"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedJob && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 "
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-9  rounded-[1rem] shadow-lg w-11/12 md:w-3/4 lg:w-3/4 relative z-99">
            {/* Arrow buttons */}
            <button
              className="absolute left-[-30px] md:left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
              onClick={prevJob}
            >
              &#8592;
            </button>
            <button
              className="absolute right-[-30px] md:right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
              onClick={nextJob}
            >
              &#8594;
            </button>

            {/* Modal content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Left column: Image */}

              {/* Right column: 50-50 split */}
              <div className="flex flex-col ">
                {/* Top half: Job details */}
                <div className=" flex-1 flex-col justify-between">
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold ">{selectedJob.title}</h2>
                    <div className="flex items-center">
                      <FaHeart className=" text-blue-600 mr-[2px]"/>
                                            <p className="font-semibold mr-4">{selectedJob.reviews}</p>
                      </div>

                  </div>
                  <p className=" leading-[1.1rem] mb-2 md:text-sm sm:text-md ">
                    Listed by:{" "}
                    <span className=" underline hover:cursor-pointer">
                      {selectedJob.name}
                    </span>
                  </p>
                  <p className=" leading-[1.1rem] mb-1">
                    <span className="font-extrabold mb-2">Description:</span>
                    <br />
                    {selectedJob.description}
                  </p>
                  <p>
                    <span className="font-bold leading-[0.2rem] mb-2">
                      Location:{" "}
                    </span>
                    {selectedJob.location}
                  </p>
                  <p className="font-black mb-2">
                    Rate:{" "}
                    <span className=" font-black text-blue-500 ">
                      {"£" + selectedJob.rate}
                    </span>
                  </p>
                  <ul className="flex flex-wrap gap-2 my-3 ">
                    {selectedJob.services.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <Button text={`Contact ${selectedJob.name}`} dark />
                </div>

                {/* Bottom half: Map placeholder */}
                <div className="flex-1 h-60  rounded-lg mt-4">
                  <MapComponent location={selectedJob.location} />
                </div>
              </div>
              <div className="h-full relative">
                {" "}
                {/* Set a height for the container */}
                <img
                  src={selectedJob.imageUrl}
                  alt={selectedJob.title}
                  className="w-full h-full max-h-[700px] object-cover rounded-xl" // Adjusted class for proper aspect ratio
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300"
              : "bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 text-white"
          }`}
        >
          Back
        </button>

        <p>
          Page {currentPage} of {totalPages}
        </p>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
