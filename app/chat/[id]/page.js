"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation"; // For getting URL parameters
import conversations from "../../utils/conversations";
import ChatBubble from "../../components/ChatBubble"; // Assuming you have a ChatBubble component
import { fakeUser } from "../../components/Dashboard";
import { FiUser, FiEdit } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { FaCrown, FaHeart } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import MapComponent from "../../components/MapComponent";
import { useAuth } from "@/app/authContext";
import Login from "../../components/Login";
import Image from "next/image";
import MustBePro from "@/app/components/MustBePro";

export default function ChatDetailPage() {
  const { isAuthenticated, isPro } = useAuth();
  const { id } = useParams(); // Get the chat ID from the URL
  const router = useRouter();
  // Find the conversation by ID
  const conversation = conversations.find((conv) => conv.id === parseInt(id));
  let children = <MustBePro  text={"Chat feature"}/>;

  if (isPro) {
    children = (
      <div className=" grid grid-cols-[auto_2fr_1fr] gap-10 px-10 justify-center items-center">
        <div>
          <button
            onClick={() => {
              router.back();
            }}
          >
            <FiArrowLeft
              className="mr-2 text-blue-600 font-extrabold duration-[0.5s] hover:scale-125 "
              size={30}
            />
          </button>
        </div>
        <div className="flex flex-col p-4 max-w-full h-full w-full bg-gradient-to-r via-blue-50 from-white to-blue-100 border-blue-600 shadow-lg hover:shadow-blue-300 rounded-2xl duration-[0.7s] flex-grow">
          <h2 className="font-bold text-3xl text-blue-600 w-full truncate max-w-[700px]">
            {conversation.description}
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
        <div className="bg-gradient-to-r from-blue-100 to-blue-400  h-[590px] w-[300px]  flex justify-center shadow-lg  hover:shadow-blue-300 duration-[0.7s]   rounded-2xl">
          <div className=" bg-white w-full rounded-2xl rounded-t-full ">
            {/* Profile Image */}
            <div
              className="flex justify-center items-center   h-[145px] rounded-t-[5rem] relative"
              // style={{
              //   backgroundImage: `url(${fakeUser.bgImage})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              {/* Banner */}
              <div className="absolute top-[30px] left-[170px] transform -translate-x-1/2 bg-blue-100 px-2 py-[7px] rounded-full">
                <span className="text-blue-600 text-sm  font-extrabold ">
                  <FaCrown />
                </span>
              </div>

              <Image
                src={conversation.imageUrl}
                alt="User Profile"
                width={100}
                height={100}
                className="h-[100px] w-[100px] rounded-full shadow-xl border-2 object-cover mt-4 "
              />
            </div>

            {/* User Info */}
            <div className="pt-4  pb-0 px-3">
              <div className="flex justify-between items-center">
                <h2 className="text-sm mr-3 font-extrabold">
                  {conversation.participants[1]}
                </h2>
                <button className="text-blue-600">
                  {/* <FiEdit size={15} /> */}
                  <FaHeart size={15} />
                </button>
              </div>
              <p className="text-gray-600 mb-1 text-xs ">
                {conversation.location}
              </p>
              <h4 className="font-semibold text-blue-500">
                {conversation.jobTitle}
              </h4>
              <div className="flex items-center  ">
                <span className="mr-[3px] text-blue-600 font-semibold text-sm">
                  {conversation.reviews}
                </span>
                {/* Render star icons based on the reviews value */}
                {[...Array(fakeUser.reviews)].map((_, index) => (
                  <AiFillStar key={index} className="text-blue-500" />
                ))}
              </div>
              <button className="px-3 py-1 mt-3 bg-blue-100 text-blue-600 font-semibold rounded-full">
                See More
              </button>
              {/* Skills Section */}

              <div className="mt-4">
                <MapComponent location={conversation.location} />
              </div>
              {/* Action Buttons */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!conversation) {
    return <div> No conversation Found</div>;
  }

  return <div className="flex-1 flex flex-col justify-center items-center ">{children}</div>;
}
