import Title from '@/components/Title';
import React from 'react'

const TutorialPage =async ({params}) => {
    const {slug}=await params;
  const [technology,topic,,page_no,subject]=slug;
    
  return (
    <div>
      <Title>{technology} tutorials</Title>
      <h2>{topic}</h2>
      <div className='flex justify-between'>
        <h3 className='font-bold'>{subject}</h3>
        <p>Page no:{page_no}</p>
        <p>{subject}</p>
      </div>
      this 
    </div>
  )
}

export default TutorialPage
