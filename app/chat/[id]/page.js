"use client"
import { useParams } from "next/navigation"; // For getting URL parameters
import conversations from "../../utils/conversations";
import ChatBubble from "../../components/ChatBubble"; // Assuming you have a ChatBubble component

export default function ChatDetailPage() {
  const { id } = useParams(); // Get the chat ID from the URL

  // Find the conversation by ID
  const conversation = conversations.find((conv) => conv.id === parseInt(id));

  if (!conversation) {
    return <div>Conversation not found.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col p-4  max-w-[1000px] w-full bg-blue-100 border-blue-600 shadow-lg shad shadow-blue-300 rounded-2xl duration-200 hover:scale-105 ">
        <h2 className=" font-bold text-3xl  text-blue-600">
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
    </div>
  );
}
