import React from 'react'
import { services } from '../constants'
import Service from '../components/Service'

const CategorySection = () => {
  return (
    <section className='relative mt-20'>
        <img src="/images/bg-category.svg" alt="" className='hidden lg:block lg:absolute lg:top-0 lg:right-0' />

        <div className='text-center space-y-2 lg:space-y-5 text-[#1E1F3D]'>
            <h2 className='text-2xl font-semibold'>Category</h2>
            <h1 className='text-3xl lg:text-5xl font-bold capitalize'>We offer best services</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 md:gap-4 p-4 mt-12 lg:mt-28 relative'>
            {
                services.map((service, index) => (
                    <Service key={index} image={service.image} name={service.name} desc={service.desc} />
                ))
            }
        </div>
    </section>
  )
}

export default CategorySection