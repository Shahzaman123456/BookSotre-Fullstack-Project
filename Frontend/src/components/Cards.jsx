import React from 'react'
// import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import react from "../assets/react.jpg";
import python from '../assets/phyton.jpeg'
import webdevelop from '../assets/webdevelop.jpeg'
import clang from '../assets/clang.jpg'
import data from '../assets/data.jpeg'


const Cards = ({item}) => {
    const images={
        "book3.jpg" :book3,
        "react.jpg" :react,
        "phyton.jpeg":python,
        "webdevelop.jpeg" :webdevelop,
        "clang.jpg" :clang,
        "data.jpeg":data
    }
  return (
    <>
      <div className="flex justify-center mt-20 px-1 ">
        <div className="card bg-base-100 w-full sm:w-96 shadow-sm transition-all duration-100 hover: hover:border-2 hover:border-gray-500 hover:shadow-lg">
          <figure>
            <img className='w-50'
              src={images[item.image]}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>
                {item.description}
            </p>
            <div className="card-actions flex  justify-between ">
              <div className="badge badge-outline">{item.price}</div>
              <div className=" cursor-pointer  badge badge-outline hover:bg-pink-400 duration-300 hover:text-white ">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
