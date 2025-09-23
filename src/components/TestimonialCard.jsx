import React from 'react'

const TestimonialCard = ({image, comment, name, location}) => {
  return (
    <div className='relative bg-white rounded-lg shadow-sm drop-shadow-md p-5'>
        <p className='max-w-[30rem]'>{comment}</p>

        <div className='mt-10'>
            <p className='font-semibold'>{name}</p>
            <p className='text-sm'>{location}</p>
        </div>

        <img src={image} alt="Avatar" className='absolute -top-5 -left-5 w-12' />
    </div>
  )
}   

export default TestimonialCard