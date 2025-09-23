import React from 'react'
import { services } from '../constants'
import Service from '../components/Service'

const Category = () => {
  return (
    <section className='relative mt-20'>
        <img src="/images/bg-category.svg" alt="" className='absolute top-0 right-0' />

        <div className='text-center space-y-5 text-[#1E1F3D]'>
            <h2 className='text-2xl font-semibold'>Category</h2>
            <h1 className='text-5xl font-bold'>We Offer Best Services</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-28 relative'>
            {
                services.map((service, index) => (
                    <Service key={index} image={service.image} name={service.name} desc={service.desc} />
                ))
            }
        </div>
    </section>
  )
}

export default Category