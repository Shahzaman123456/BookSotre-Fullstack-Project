import React, { useEffect, useState } from "react";
import list from '../assets/liston.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { data } from "react-router-dom";


const Freebook = () => {
    const API_URL = import.meta.env.VITE_BACKEND_URL;

  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook=async () =>{
      try {
        const res = await axios.get(`${API_URL}/book`)
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data)
        setBook(data);
      } catch (error) {
        console.log("Error getFreeBook ",error)
      }
    };
    getBook();
  },[])
  
  
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20">
    <div> 
    <h1 className="font-semibold text-xl pb-2">Free offered Courses</h1>
    <p>Books are a powerful and enduring medium that offers pathways to knowledge, entertainment, and wisdom. Whether printed on paper or accessed digitally, they allow us to explore new worlds, understand different perspectives, and reflect on the human experience.</p>
   </div>
   <div className="slider-container">
      <Slider {...settings}>
       {book.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
   </>
  );
};

export default Freebook;
