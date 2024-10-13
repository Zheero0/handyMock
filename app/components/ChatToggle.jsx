import { useState } from "react";
import Link from "next/link";
import conversations from "../utils/conversations";


export default function Chat() {
  return (
    <div>
      <h1>Conversations</h1>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <Link href={`/chat/${conversation.id}`}>
              <a>
                <h3>{conversation.participants.join(", ")}</h3>
                <p>{conversation.preview}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
