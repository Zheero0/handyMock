import React from "react";
import Main from "../components/Main";

import ChatAuth from "../components/ChatAuth";

export const metadata = {
  title: "Any Task ⋅ Chat",
};

export default function ChatPage() {


  return(
    <div className="flex flex-col flex-1">
    <ChatAuth/>   
    </div>
  )
  ;
}
