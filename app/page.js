'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
const router = useRouter();

  return (
    <div>
      <h1 className='mt-20 mb-20 font-medium text-3xl text-white'>USER MANAGEMENT PROJECT</h1>
      <div className="flex justify-center items-center ">
      <button 
        className='border-2 rounded px-2 py-2 text-white' 
        onClick={() => router.push("users")}>
        Check the Users Information
        </button>
        </div>
    </div>
  )
}

export default Home