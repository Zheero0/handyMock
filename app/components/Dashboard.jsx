import React from "react";
import { FiUser, FiEdit } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export default function Dashboard() {
  const fakeUser = {
    name: "Jessica Carrington",
    location: "London, UK",
    email: "johndoe@example.com",
    bio: "Enthusiastic Next.js and React developer with over 5 years of experience building dynamic web applications. Proficient in Tailwind CSS for responsive designs and Node.js for effective server-side functionality. Committed to creating high-quality, user-focused solutions and continuously exploring new technologies in the evolving web development landscape.",
    skills: ["React", "Next.js", "TailwindCSS"],
    reviews: 4,
    profileImage:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Place your image here
    bgImage:
      "https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-2048x1367.jpg",
  };
  return (
    <div className="grid grid-cols-[auto_1fr] gap-[150px]">
      {/* Profile Section */}
      <div className="max-w-md bg-white rounded-2xl rounded-t-full ml-[100px]">
        {/* Profile Image */}
        <div
          className="flex justify-center items-center bg-blue-600 h-[350px] rounded-t-full relative"
          style={{
            backgroundImage: `url(${fakeUser.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Banner */}
          <div className="absolute top-[70px] left-[300px] transform -translate-x-1/2 bg-blue-100 px-3 py-1 rounded-full">
            <span className="text-blue-600 font-semibold">handy PRO</span>
          </div>

          <img
            src={fakeUser.profileImage}
            alt="User Profile"
            className="h-[250px] w-[250px] rounded-full border-2 object-cover mt-4 "
          />
        </div>

        {/* User Info */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-extrabold">{fakeUser.name}</h2>
            <button className="text-blue-600">
              <FiEdit size={20} />
            </button>
          </div>
          <p className="text-gray-600 mb-2">{fakeUser.location}</p>
          <h4 className="font-semibold text-blue-500">Web Developer</h4>
          <div className="flex items-center ">
            <span className="mr-[3px] text-blue-600 font-semibold text-sm">
              18
            </span>
            {/* Render star icons based on the reviews value */}
            {[...Array(fakeUser.reviews)].map((_, index) => (
              <AiFillStar key={index} className="text-blue-500" />
            ))}
          </div>
          <p className="mt-4">{fakeUser.bio}</p>

          {/* Skills Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {fakeUser.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
        </div>
      </div>

      {/* Gray Background Section */}
      <div className="h-full rounded-2xl p-8 pt-0 ">
        <h2 className="text-2xl font-bold mb-4 ">Pro Dashboard</h2>

        {/* Active Job Applications */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold ">Active Job Applications</h3>
          <ul className="mt-2 max-w-[500px] w-full">
            <li className=" shadow-md p-3  bg-blue-100 rounded-lg mb-2 duration-200 hover:scale-105">
              <h4 className="font-bold text-blue-600">
                Web Developer Position
              </h4>
              <p className="text-gray-600">Applied on: September 15, 2024</p>
              <p className="text-gray-500">Status: Awaiting Response</p>
            </li>
            <li className=" bg-blue-100 shadow-md p-3 rounded-lg mb-2 duration-200 hover:scale-105">
              <h4 className="font-bold text-blue-600">
                Graphic Designer Position
              </h4>
              <p className="text-gray-600">Applied on: September 10, 2024</p>
              <p className="text-gray-500">Status: Interview Scheduled</p>
            </li>
          </ul>
        </div>

        {/* Completed Jobs */}
        <div className="mb-6 max-w-[500px] w-full">
          <h3 className="text-xl font-semibold">Completed Jobs</h3>
          <ul className="mt-2">
            <li className=" bg-blue-100 shadow-md p-3 rounded-lg mb-2 duration-200 hover:scale-105">
              <h4 className="font-bold text-blue-600">
                Landing Page Development
              </h4>
              <p className="text-gray-600">Completed on: August 30, 2024</p>
              <p className="text-gray-500 flex items-center">
                Client Feedback:{" "}
                <span className="flex">
                  {[...Array(fakeUser.reviews)].map((_, index) => (
                    <AiFillStar key={index} className="text-blue-500" />
                  ))}
                </span>
              </p>
            </li>
            <li className=" bg-blue-100 shadow-md p-3 rounded-lg mb-2 duration-200 hover:scale-105">
              <h4 className="font-bold text-blue-600">
                Logo Design for Company XYZ
              </h4>
              <p className="text-gray-600">Completed on: August 15, 2024</p>
              <p className="text-gray-500 flex items-center">
                Client Feedback:{" "}
                <span className="flex">
                  {[...Array(fakeUser.reviews)].map((_, index) => (
                    <AiFillStar key={index} className="text-blue-500" />
                  ))}
                </span>
              </p>
            </li>
          </ul>
        </div>

        {/* Job Recommendations */}
        <div className="max-w-[500px] w-full">
          <h3 className="text-xl font-semibold">Recommended Jobs</h3>
          <ul className="mt-2">
            <li className=" bg-blue-100 shadow-md p-3 rounded-lg mb-2 duration-200 hover:scale-105">
              <h4 className="font-bold text-blue-600">Full-Stack Developer</h4>
              <p className="text-gray-600">Location: Remote</p>
            </li>
            <li className=" bg-blue-100 shadow-md p-3 rounded-lg mb-2 duration-200 hover:scale-105">
              <h4 className="font-bold text-blue-600">Content Writer</h4>
              <p className="text-gray-600">Location: London, UK</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
