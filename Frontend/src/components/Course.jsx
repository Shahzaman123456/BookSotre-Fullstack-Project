import React from "react";
import Cards from "./Cards";
import { Link }  from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'



const Course = () => {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const [book,setbook]=useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${API_URL}/book`);
        console.log(res.data);
        setbook(res.data); // ✅ now res is defined
      } catch (error) {
        console.log("Fetch error", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:w-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> here! : </span>
          </h1>
          <p className="mt-5">
            Powerful words on books celebrate them as vessels of knowledge,
            comfort, and escape. They remind us that books are loyal companions
            and doors to other worlds, offering wisdom and new perspectives.
          </p>
       <Link to="/">
          <button className="bg-pink-500 text-white px-5 py-1 rounded-xl mt-5 hover:bg-pink-400 duration-200">
            Back
          </button>
       </Link>
        </div>

        {/* Cards Section */}
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
