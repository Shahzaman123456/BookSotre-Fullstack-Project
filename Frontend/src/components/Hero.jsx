import React from 'react'
import bookstore from '../assets/book2.jpg'   // ✅ Correct import
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        
        {/* Left Section */}
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              asperiores architecto quibusdam et quis tempora, minima neque
              placeat. Facilis neque nam explicabo facere eaque ut blanditiis
              minus autem laudantium enim.
            </p>
          </div>

          {/* Email Input */}
          <div className="mt-10 w-full max-w-md space-y-6">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
            <Link to={"/course"} className="bg-pink-500 px-3 py-3 rounded-md text-white 
              hover:bg-pink-400 cursor-pointer">
              Use paid Coureses
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className=" order-1 w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={bookstore} alt="Bookstore" className="rounded-xl shadow-lg w-92 h-92 mt-20  " />
        </div>

      </div>
    </>
  )
}

export default Hero
