"use client"
import React from 'react'
import {useROuter} from "next/navigation"
const Banner = () => {
    const router=useRouter();
  const handleBtn = () => {
    alert("clicked")
    const password=prompt("Enter your password")
    if (password == '1234') {
 router.push("/dashboard")
} else {
  alert("Wrong password ❌")
}
  }

  return (
    <div className='text-center space-y-5 bg-gradient-to-r from-sky-300 to-sky-100'>
      <h2 className='text-4xl font-bold'>Welcome to Dev story 🐳</h2>
      <button 
        onClick={handleBtn} 
        className='px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-black duration-200'
      >
        Share story
      </button>
    </div>
  )
}

export default Banner