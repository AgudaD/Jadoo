import React from 'react'

const BookingComponent = ({image, title, desc}) => {
  return (
    <div className='flex items-center gap-5'>
        <img src={image} alt={title} />

        <div>
            <h2 className='font-semibold'>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default BookingComponent