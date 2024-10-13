"use client"
import { React } from 'react'
import PostJobForm from './PostJobForm'
import Login from './Login'
import { useAuth } from "../authContext";

export default function ToggleAuth() {

  const { isAuthenticated } = useAuth();

  let children = (
    <Login  />
  );

  if (isAuthenticated) {
    children = <PostJobForm />;
  }

  return (
    <div className='w-full'>{children}</div>
  )
}
