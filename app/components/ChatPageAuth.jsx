import React from 'react'
import { useAuth } from '../authContext'
import Login from './Login';
import Chat from './Chat';

export default function ChatPageAuth() {
    const { isAuthenticated } = useAuth();

    const children = (
        <Login/>
    )

    if (isAuthenticated) { 
        <Chat/>
    }

    return (
        <div>
              {children}
        </div>
  
  )
}
