import React from "react";
import Dashboard from "../components/Dashboard";
import Main from "../components/Main";
import Login from "../components/Login";
import ChatComponent from "../components/Chat";
import ChatAuth from "../components/ChatAuth";

export const metadata = {
  title: "Marketplace ⋅ Chat",
};

export default function ChatPage() {


  return <Main>
    <ChatAuth/>
  </Main>;
}
