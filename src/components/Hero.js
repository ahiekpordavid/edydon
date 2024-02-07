import React from 'react'
import image1 from "../assets/galla.jpg";

const Hero = () => {
  return (
    <div className="relative h-[500px]">
      <img
        src={image1}
        alt="gallery"
        style={{ width: "100%"}}
        className="h-full object-cover"
      />
    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center flex-col background gap-5">
      <p className="text-4xl font-semibold">Gallery</p>
      <div className="w-[30px] h-[2px] bg-blue-400"></div>
    </div>
  </div>
  )
}

export default Hero