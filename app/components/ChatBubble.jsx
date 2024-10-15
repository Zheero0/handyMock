const ChatBubble = ({ text, sender }) => {
  return (
    <div
      className={`flex ${
        sender === "me" ? "justify-end" : "justify-start"
      } mb-2`}
    >
      <div
        className={`relative max-w-xs p-3 font-bold rounded-lg  ${
          sender === "me"
            ? "bg-blue-500 text-white shadow-xl shadow-blue-300"
            : "bg-gray-200 text-gray-800 shadow-xl shadow-gray-300"
        }`}
      >
        {text}
        <span
          className={`absolute w-0 h-0 border-t-8  ${
            sender === "me"
              ? "border-l-8 border-l-blue-500 border-t-transparent right-0 top-1/2 transform -translate-y-1/2"
              : "border-r-8 border-r-gray-200 border-t-transparent left-0 top-1/2 transform -translate-y-1/2"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default ChatBubble;
