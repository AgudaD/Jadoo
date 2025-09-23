import React from 'react'

const TestimonialCard = ({image, comment, name, location}) => {
  return (
    <div className='bg-white rounded-lg shadow-sm drop-shadow-md'>
        <p>{comment}</p>

        <div>
            <p className='font-semibold'>{name}</p>
            <p className='text-sm'>{location}</p>
        </div>
    </div>
  )
}

export default TestimonialCard