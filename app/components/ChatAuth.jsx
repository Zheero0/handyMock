"use client"
import React from 'react'
import { useAuth } from '../authContext'
import Login from './Login';
import Chat from './Chat';
import MustBePro from './MustBePro';

export default function ChatAuth() {
    const { isAuthenticated, isPro } = useAuth();

    let children = (
        <MustBePro/>
    )

    if (isPro) {
        children = <Chat/>
     }
    


    return (
    
      <div className='flex flex-col  place-content-center my-auto px-0'>{ children}</div>
  )
}
