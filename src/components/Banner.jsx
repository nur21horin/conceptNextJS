import React from 'react'

const Banner = () => {
  return (
    <div className='text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 '>
      <h2 className='text-4xl font-bold'>Welcome to Dev story 🐳</h2>
      <button className='px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-black duration-200'>Share story</button>
    </div>
  )
}

export default Banner
