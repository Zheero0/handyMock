import React from "react";
import { useAuth } from "../authContext";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function MustBePro() {
  const { goPro, isPro } = useAuth();

  const handlePro = () => {
    goPro();
    console.log(isPro);
  };

  return (
    <div className="p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
        You must be a Pro user to use this feature
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 rounded-lg ">
        {/* Benefits Column */}
        <div className="bg-white p-6 rounded-lg shadow-md duration-200 hover:shadow-blue-400">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Why Go Pro?</h2>
          <p className=" mb-6">Discover the benefits of becoming a Handy Pro below!</p>
          <ul className="space-y-4 text-gray-700">
            <li className=" flex items-center font-medium text-xl">
              <AiOutlineCheckCircle className="inline-block mr-1 text-2xl text-green-500" />{" "}
              Enhanced profile visibility for more opportunities
            </li>
            <li className=" flex items-center font-medium text-xl">
              <AiOutlineCheckCircle className="inline-block mr-1 text-2xl text-green-500" />{" "}
              Access premium job listings not available to free users
            </li>
            <li className=" flex items-center font-medium text-xl">
              <AiOutlineCheckCircle className="inline-block mr-1 text-2xl text-green-500" />{" "}
              Priority support from our team
            </li>
            <li className=" flex items-center font-medium text-xl">
              <AiOutlineCheckCircle className="inline-block text-2xl mr-1 text-green-500" />{" "}
              Exclusive tools to manage jobs more efficiently
            </li>
          </ul>
        </div>

        {/* CTA and Payment Column */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center duration-200 hover:shadow-blue-400">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Upgrade to Pro
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            Unlock all the benefits of a Pro membership and take your experience
            to the next level!
          </p>

          <div className="bg-gray-200 p-4 w-full rounded-md mb-6">
            <p className="text-gray-800 font-semibold">Pro Subscription</p>
            <p className="text-gray-500">Start with a free 30-day trial</p>
            <p className="text-gray-500">£4.99/month after trial</p>
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-700 transition"
            onClick={handlePro}
          >
            Start Free 30-Day Trial
          </button>

          <p className="text-sm text-gray-500 mt-4">
            100% satisfaction guaranteed, or cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
