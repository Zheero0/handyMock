import React from 'react'

export default function MustPro() {
  return (
<div className="flex flex-col justify-center items-center gap-4 p-4">
      {isLoggedIn ? (
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Ready to Post a Job?
          </h2>
          <p>Click the button below to post a new job!</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200">
            Post Job
          </button>
        </div>
      ) : (
        <div className="flex flex-col flex-1 justify-center items-center gap-4 ">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Login / Register
          </h2>
          <p>You're one step away from posting a job!</p>
          <input
            type="text"
            className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-blue-600 duration-200 hover:border-blue-700 focus:border-blue-400 rounded-full outline-none"
            placeholder="Email"
          />
          <input
            className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-blue-600 duration-200 hover:border-blue-700 focus:border-blue-400 rounded-full outline-none"
            placeholder="Password"
            type="password"
          />
          <div className="max-w-[400px] w-full mx-auto">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200">
              Submit
            </button>
          </div>
          <p>
            Don't have an account? <span className='text-blue-600'>Sign Up</span>
          </p>
        </div>
      )}
    </div>
  )
}
