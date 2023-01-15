import React from 'react'

function Subscribe() {
  return (
    <section className=" bg-gray-200/80 flex justify-center items-center py-20 ">
        <div className=" max-w-3xl">
          <p className=" text-2xl lg:text-4xl text-center pb-4 font-bold font-serif tracking-tighter">Subcribe to our Newsletter<span className=" text-3xl lg:text-5xl text-yellow-400">.</span></p>
          <p className=" text-center hidden lg:block lg:text-xl text-gray-600">
          Subscribe to Our Weekly Newsletter where we talk about Artificial Inteliigence and Data Science.
          </p>
          <div className=" flex mt-8 mx-auto max-w-max">
            <input className=" bg-gray-300 px-4 py-4 lg:w-[400px]" placeholder="Enter email address" />
            <button className=" px-6 py-4 bg-black text-white">Subscribe</button>

          </div>
        </div>
      </section>
  )
}

export default Subscribe