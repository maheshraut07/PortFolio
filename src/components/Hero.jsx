import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/MaheshProfileOnUinform.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-14 lg:text-8xl">
              Mahesh Raut
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Software Engineer
            </span>
            <p className="my-2 max-w-xl py-c font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-5">
          <div className="flex justify-center items-center h-full">
            <img
              className="h-auto w-80 mt-4 max-h-100 object-cover rounded-lg" 
              src={profilePic} 
              alt="profilePic" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
