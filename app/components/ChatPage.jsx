"use client"
import { useParams } from "next/navigation"; // For getting URL parameters
import conversations from "../../utils/conversations";
import ChatBubble from "../../components/ChatBubble"; // Assuming you have a ChatBubble component
import {fakeUser} from "../../components/Dashboard"
import { FiUser, FiEdit } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai"
import { FaCrown } from "react-icons/fa";
import MapComponent from "../../components/MapComponent";


export default function ChatDetailPage() {
  const { id } = useParams(); // Get the chat ID from the URL

  // Find the conversation by ID
  const conversation = conversations.find((conv) => conv.id === parseInt(id));

  if (!conversation) {
    return <div>Conversation not found.</div>;
  }

  return (
    <div className="grid grid-cols-[1fr_auto] gap-10 px-10">
      <div className="flex flex-col p-4 max-w-full w-full bg-blue-100 border-blue-600 shadow-lg hover:shadow-blue-300 rounded-2xl duration-200  flex-grow">
        <h2 className="font-bold text-3xl text-blue-600">
          {conversation.participants[1]}
        </h2>
        <h5 className="pb-7 mb-6">{conversation.location}</h5>
        <div className="flex-1 overflow-y-auto mb-4 pb-8">
          {conversation.messages.map((message) => (
            <ChatBubble
              key={message.id}
              text={message.text}
              sender={message.sender}
            />
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
            Send
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-100 to-blue-400 pt-5 h-[590px]  w-full flex justify-center shadow-lg  hover:shadow-blue-300 duration-200  mx-0 rounded-2xl">
        <div className=" bg-white  rounded-2xl rounded-t-full ">
          {/* Profile Image */}
          <div
            className="flex justify-center items-center   h-[145px] rounded-t-[5rem] relative"
            style={{
              backgroundImage: `url(${fakeUser.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Banner */}
            <div className="absolute top-[30px] left-[170px] transform -translate-x-1/2 bg-blue-100 px-2 py-[7px] rounded-full">
              <span className="text-blue-600 text-sm  font-extrabold ">
                <FaCrown />
              </span>
            </div>

            <img
              src={conversations.imageUrl}
              alt="User Profile"
              className="h-[100px] w-[100px] rounded-full border-2 object-cover mt-4 "
            />
          </div>

          {/* User Info */}
          <div className="py-4 px-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-extrabold">{fakeUser.name}</h2>
              <button className="text-blue-600">
                <FiEdit size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-1 text-xs ">{fakeUser.location}</p>
            <h4 className="font-semibold text-blue-500">Web Developer</h4>
            <div className="flex items-center ">
              <span className="mr-[3px] text-blue-600 font-semibold text-sm">
                11
              </span>
              {/* Render star icons based on the reviews value */}
              {[...Array(fakeUser.reviews)].map((_, index) => (
                <AiFillStar key={index} className="text-blue-500" />
              ))}
            </div>

            {/* Skills Section */}

            <div className="">
              <MapComponent location={fakeUser.location} />
            </div>
            {/* Action Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
}
