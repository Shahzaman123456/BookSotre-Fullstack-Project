import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import SignUP from "./components/SignUP";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthicPrvider";
import Contact from "./components/Contact";


const App = () => {

const {authUser,setAuthUser} = useAuth()
// console.log(authUser)    
  return (
    <>
   {/* <Home/> 
   <Course/> */}
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/course" element={ authUser?<Courses/>:<Navigate to="/signup"/>}/>
<Route path="/signup" element={<SignUP/>} />
<Route path="/contact" element={<Contact/>}/>
   </Routes>
   <Toaster/>
    </>
  );
};

export default App;
