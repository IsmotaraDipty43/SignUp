import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* Mobile Container */}
      <div className="w-[375px] h-[800px] bg-[#f7f8f9] border border-gray-300 flex flex-col justify-end p-6 text-center ">
       

        {/* Content */}
        <h1 className="text-3xl text-left font-bold text-[#1d2226]">Welcome to PopX</h1>
        <p className="text-[#b5b7ba] font-semibold text-left mt-2 text-lg">
          Discover new possibilities and connect with amazing people.
        </p>

        {/* Buttons */}
        <div className="mt-6 w-full">
        <Link to='/creat'>  <button className="w-full bg-[#6c25ff] text-white font-bold py-3 rounded-lg  shadow-md  transition">
            Create Account
          </button></Link>
        <Link to='/login'>  <button className="w-full mt-3 bg-[#cebafb] text-black font-bold py-3 rounded-lg  shadow-md  transition">
            Already Registered? Login
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
