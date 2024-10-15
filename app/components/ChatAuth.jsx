"use client"
import React from 'react'
import { useAuth } from '../authContext'
import Login from './Login';
import Chat from './Chat';

export default function ChatAuth() {
    const { isAuthenticated } = useAuth();

    let children = (
        <Login />
    )

    if (isAuthenticated) {
        children = <Chat/>
     }
    


    return (
    
      <div className='flex flex-col  place-content-center my-auto px-0'>{ children}</div>
  )
}
