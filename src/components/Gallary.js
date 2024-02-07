import React from 'react'
import image1 from "../assets/gal.jpg";
import image2 from "../assets/gal1.jpg";
import image3 from "../assets/plaster.jpg";
import { Link } from 'react-router-dom';

const Gallary = () => {
    const data = [
        {
          icon: image1,
        },
        {
          icon: image2,
        },
        {
          icon: image3,
        },
      ];
  return (
    <div className="flex flex-col min-h-[95vh] galleryBg">
    <div className="flex flex-col container mx-auto py-[100px] items-center">
      <h1 className="font-bold flex flex-col items-center">
        <p className="font-semibold text-white text-2xl">Gallery</p>
        <div className="w-[30px] h-[2px] bg-white"></div>
      </h1>
      <div className="w-[100%] grid grid-cols-3 gap-10 mt-[60px]">
        {data.map((item) => (
          <div
            className="shadow-xl rounded-lg h-[500px] bg-white"
            key={item.name}
          >
            <img
              src={item.icon}
              alt=""
              className="h-[500px] w-[100%] object-cover"
            />
          </div>
        ))}
      </div>

      <Link className="uppercase text-lg font-medium mt-20 text-white border-b-2 w-max" to="/gallery">
        View More
      </Link>
    </div>
  </div>
  )
}

export default Gallary