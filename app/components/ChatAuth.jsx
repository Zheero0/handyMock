"use client"
import React from 'react'
import { useAuth } from '../authContext'
import Login from './Login';
import ChatComponent from './Chat';

export default function ChatAuth() {
    const { isAuthenticated } = useAuth();

    let children = (
        <Login />
    )

    if (isAuthenticated) {
        children = <ChatComponent/>
     }
    


    return (
    
      <div className='flex flex-col  items-center place-content-center my-auto'>{ children}</div>
  )
}
