import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/Carousel1.jpg";
import image2 from "../assets/plaster.jpg";
import image3 from "../assets/Carousel3.jpg";
import React from "react";
import "./components.css";

const items = [
  {
    img: image1,
    title: "Welcome To ESL",
    description: "20 Years Worth Of Experience",
  },
  {
    img: image2,
    title: "Quick To",
    description: "Prvide Nation Wide Service",
  },
  {
    img: image3,
    title: "We Provide",
    description: "Innovative And Sustainable Infrastructure Solutions",
  },
];
const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative">
      <div>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index}>
              <div className="relative h-[100vh]">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "100%"}}
                    className="h-full object-cover"
                  />
                <div className="absolute top-0 left-0 bottom-0 right-0 flex pt-[25%] items-center flex-col background gap-5">
                  <p className="font-medium text-2xl">{item.title}</p>
                  <p className=" text-5xl font-semibold max-w-[900px] text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[800px] h-[150px] bg-white text-black absolute bottom-[150px] flex flex-row justify-between pl-10">
        <div className="flex flex-col gap-3 text-center justify-center">
          <p className="text-2xl font-bold">Quick Service Request</p>
          <p className="text-blue-400 text-xl font-semibold">
            Send A call Request
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <input className=" border-2 rounded-md w-[300px] h-[40px] p-2" placeholder="email" />
          <input className="border-2 rounded-md w-[300px] h-[40px] p-2" placeholder="phone number" />
        </div>

        <button
          type="submit"
          className="w-[150px] bg-blue-400 text-xl font-semibold text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Slide;
