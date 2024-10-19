import React from "react";
import Main from "../components/Main";

import ChatAuth from "../components/ChatAuth";

export const metadata = {
  title: "handy ⋅ Chat",
};

export default function ChatPage() {


  return <Main>
    <ChatAuth/>
  </Main>;
}
