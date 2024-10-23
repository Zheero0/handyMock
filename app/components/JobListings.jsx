"use client"
import React, { useState } from "react";

import Button from "./Button";
import { CiBookmark } from "react-icons/ci";
import { jobListings } from "../utils/jobLists";
import MapComponent from "./MapComponent"; 


export default function JobListings() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // State to hold filtered job listings
  const [filteredJobs, setFilteredJobs] = useState(jobListings);

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
    <div className="flex flex-col flex-1">

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
              className="w-[500px] h-[300px] md:h-[340px] object-cover rounded-[1.5rem]"
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
                <span className="text-white text-2xl font-extrabold tracking-[0.7px]">
                  {"£" + job.rate}
                </span>
              </div>

              <div className="flex justify-between m-0">
                {" "}
                {/* Adjust padding-top for content */}
                <h3 className="pt-1 md:text-md font-semibold">{job.title}</h3>
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
                className="mt-2 border-blue-600 border-1 rounded-full p-1 px-3 text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-400 duration-200 hover:opacity-70 hover:scale-110"
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
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-9  rounded-[1rem] shadow-lg w-11/12 md:w-3/4 lg:w-3/4 relative z-99">
            {/* Arrow buttons */}
            <button
              className="absolute left-[-30px] md:left-[-50px] top-1/2 transform -translate-y-1/2 bg-white p-2 px-3 rounded-lg"
              onClick={prevJob}
            >
              &#8592;
            </button>
            <button
              className="absolute right-[-30px] md:right-[-50px] top-1/2 transform -translate-y-1/2 bg-white p-2 px-3 rounded-lg"
              onClick={nextJob}
            >
              &#8594;
            </button>

            {/* Modal content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column: Image */}

              {/* Right column: 50-50 split */}
              <div className="flex flex-col ">
                {/* Top half: Job details */}
                <div className=" flex-1 flex-col justify-between">
                  <h2 className="text-2xl font-bold ">{selectedJob.title}</h2>
                  <p className=" leading-[1.1rem] mb-2 md:text-sm sm:text-md ">
                    Listed by:{" "}
                    <span className=" underline hover:cursor-pointer">
                      {selectedJob.postedBy}
                    </span>
                  </p>
                  <p className=" leading-[1.1rem] mb-1">
                    <span className="font-extrabold mb-2">
                      Job Description:
                    </span>
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
                  <Button
                    url={`/chat/${selectedJob.id}`}
                    text={`Contact ${selectedJob.postedBy}`}
                    dark
                  />
                </div>

                {/* Bottom half: Map placeholder */}
                <div className="flex-1 h-60 bg-gray-200 rounded-lg mt-3">
                  <MapComponent location={selectedJob.location} />
                </div>
              </div>
              <div className="h-[450px] relative">
                {" "}
                {/* Set a height for the container */}
                <img
                  src={selectedJob.imageUrl}
                  alt={selectedJob.title}
                  className="w-full h-full object-cover rounded-xl" // Adjusted class for proper aspect ratio
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
            currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
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
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
