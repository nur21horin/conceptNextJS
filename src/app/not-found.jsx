import Link from 'next/link'
import React from 'react'

const NotFound404 = () => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5'>
      <h2 className="text-red-500">404 | Your Page Not Found</h2>
      <Link href={"/"} className='underline'>Go to Home</Link>
    </div>
  )
}

export default NotFound404
