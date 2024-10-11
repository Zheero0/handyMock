"use client";
import React, { useState } from "react";
import { jobListings } from "../utils/jobLists";

export default function PostJobForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object URL for the image
    const imageUrl = image ? URL.createObjectURL(image) : "";

    // Add the new job with the object URL for the image
    jobListings.unshift({
      title: jobTitle,
      description,
      location,
      rate,
      imageUrl, // Store the local object URL for display
    });

    // Reset form fields
    setJobTitle("");
    setDescription("");
    setLocation("");
    setRate("");
    setImage(null);

    // Show submission notification
    setSubmitted(true);
    setFadeOut(false);

    // Set a timer to fade out the notification after 3 seconds
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    }, 3000);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 rounded-2xl bg-white shadow-lg hover:shadow-blue-500 hover:scale-105 transition-all duration-500 ease-in-out">
      <h2 className="text-2xl font-semibold text-center mb-4">Post a Job</h2>

      {/* Submission Notification */}
      {submitted && (
        <div
          className={`transition-opacity duration-1500 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          } bg-green-500 text-white text-center py-2 rounded-lg mb-4`}
        >
          Job submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobTitle"
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Job Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter job description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Rate */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rate"
          >
            Rate (£)
          </label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Job Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className=" text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
