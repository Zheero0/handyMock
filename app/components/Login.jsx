import React from 'react'
import Button from './Button'

export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4 ">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        Login / Register
      </h2>
      <p>You're one step away from...</p>
      <input
        type="text"
        className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-blue-600  duration-200 hover:border-blue-700 focus:border-blue-400 rounded-full outline-none"
        placeholder="Email"
      />

      <input
        className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-blue-600 duration-200 hover:border-blue-700 focus:border-blue-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" dark full />
          </div>
          <p>
              Don't have an account? <span className='text-blue-600'>Sign Up</span>
          </p>
    </div>
  );
}
