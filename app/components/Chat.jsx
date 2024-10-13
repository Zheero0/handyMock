import React from "react";
import { FaPaperPlane } from "react-icons/fa";

// Sample chat data
const chatMessages = [
  {
    id: 1,
    text: "Hey, are you still interested in a nail tech?",
    sender: "me",
  },
  { id: 2, text: "Yes, I am! Are you free on Friday 27th?", sender: "other" },
  { id: 3, text: "Yes, I am what time was you thinking booking?", sender: "me" },
  { id: 4, text: "2pm", sender: "other" },
  { id: 5, text: "2pm works great for me I'll book you in.", sender: "me" },
  { id: 6, text: "It was £40 you charge for right?", sender: "other" },
  { id: 7, text: "Yes thats correct ill see you on Friday 27th, my salons address is 123 blvd srteet m12 3ab", sender: "me" },
  { id: 8, text: "Thank you see you Friday", sender: "other" },,
];

const ChatBubble = ({ text, sender }) => {
  return (
    <div
      className={`flex ${
        sender === "me" ? "justify-end" : "justify-start"
      } mb-2`}
    >
      <div
        className={`relative max-w-xs p-3 rounded-lg ${
          sender === "me"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {text}
        {/* Tail for the chat bubble */}
        <span
          className={`absolute w-0 h-0 border-t-8 ${
            sender === "me"
              ? "border-l-8 border-l-blue-500 border-t-transparent right-0 top-1/2 transform -translate-y-1/2"
              : "border-r-8 border-r-gray-200 border-t-transparent left-0 top-1/2 transform -translate-y-1/2"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default function ChatComponent() {
  return (
    <div className="flex flex-col p-4 border border-gray-300 shadow-xl rounded-lg max-w-[650px] w-full mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Sample User</h2>
      <div className="flex-1 overflow-y-auto mb-4">
        {chatMessages.map((message) => (
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
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg flex items-center">
          <FaPaperPlane className="mr-1" />
          Send
        </button>
      </div>
    </div>
  );
}