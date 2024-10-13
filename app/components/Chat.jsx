"use client"; // Indicates this component can use client-side features

import Link from "next/link";
import conversations from "../utils/conversations";

export default function Chat() {
  return (
    <div className="p-8 pb-2 bg-blue-100 rounded-[1rem] shadow-xl duration-200 hover:scale-105">
      <h1 className="text-2xl mb-4 font-bold text-blue-600">Conversations</h1>
      <ul className="bg-blue-100 p-2">
        {conversations.map((conversation) => {
          const lastMessage =
            conversation.messages[conversation.messages.length - 1];

          return (
            <li
              key={conversation.id}
              className="mb-2 py-1 border-t-2 border-blue-600 bg-blue-100 duration-200 hover:scale-105"
            >
              <Link href={`/chat/${conversation.id}`} className="p-0 m-0">
                <h3 className="font-bold text-xl py-2 pt-1 text-blue-600">
                  {conversation.participants[1]}
                </h3>
                <p className="text-gray-500">
                  {lastMessage ? lastMessage.text : "No messages yet"}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
