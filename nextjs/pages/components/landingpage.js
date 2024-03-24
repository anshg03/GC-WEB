import React from 'react'
import Link from 'next/link'
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

function Landingpage() {
  return (
    <div className='flex flex-col min-h-screen bg-[#141415] text-white items-center py-12 px-6 gap-10'>
      <div className='text-5xl font-bold'>Indian Institute of Technology</div>
      <div className='flex gap-10'>

      <div className="flex gap-10 overflow-hidden ">

      <div className="flex flex-col items-center justify-center px-4 py-5 sm:p-6 shadow-xl rounded-2xl bg-gray-600 ">
        <h3 className="text-3xl text-center font-bold text-white mb-2">Student Login</h3>
        <div className='flex text-6xl justify-center items-center rounded-full border-4 aspect-square w-1/2 my-4 '><PiStudent/></div>
        <p className="text-md text-gray-200 mb-4">Login to access student features.</p>
        <Link
          href="/student/studentlogin"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-5 sm:p-6 shadow-xl rounded-2xl bg-gray-600 ">
        <h3 className="text-3xl text-center font-bold text-white mb-2">Faculty Login</h3>
        <div className='flex text-6xl justify-center items-center rounded-full border-4 aspect-square w-1/2 my-4 '><FaChalkboardTeacher/></div>
        <p className="text-md text-gray-200 mb-4">Login to access faculty features.</p>
        <Link
          href="/faculty/facultylogin"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </Link>
      </div>


    </div>
  </div>
</div>

  )
}

export default Landingpage


