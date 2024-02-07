import React from "react";
import "./components.css";
import image1 from "../assets/Carousel2.jpg";
import image2 from "../assets/plaster.jpg";
import image3 from "../assets/Carousel3.jpg";

const Services = () => {
  const data = [
    {
      icon: image1,
      name: "Taping and Jointing",
      description:
        "When the internal surfaces of a building such as walls and the ceiling specifically, are cladded. Plaster board is attached to these surfaces for giving an instantaneous finished look.",
      button: <button className="uppercase border-b-2">Read More</button>,
    },
    {
      icon: image2,
      name: "Plastering",
      description:
        "Plaster is aprotective or decorative coating of walls and ceilings and for mounding and casting decorative elements.",
      button: <button className="uppercase border-b-2">Read More</button>,
    },
    {
      icon: image3,
      name: "Painting and Decorating",
      description:
        "ELS can expect to offer professional advice on colors and designs and employ a wide range of finishing skills.",
      button: <button className="uppercase border-b-2">Read More</button>,
    },
  ];
  return (
    <div className="flex flex-col min-h-[95vh] bg-slate-100">
      <div className="flex flex-col container mx-auto py-[100px] items-center">
        <h1 className="font-bold flex flex-col items-center">
          <p className="font-semibold text-blue-400 text-2xl">Our Services</p>
          <div className="w-[30px] h-[2px] bg-blue-400"></div>
        </h1>
        <div className="w-[100%] grid grid-cols-3 gap-10 mt-[60px]">
          {data.map((item) => (
            <div
              className="shadow-xl h-[600px] rounded-lg bg-white"
              key={item.name}
            >
              <img
                src={item.icon}
                alt=""
                className="w-[100%] h-[60%] rounded-t-lg"
              />
              <div className="p-10 text-black flex flex-col justify-between h-[40%]">
                <div>
                  <h2 className="font-bold text-xl mb-5 text-blue-400">{item.name}</h2>
                  <p>{item.description}</p>
                </div>
                <div>{item.button}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="uppercase text-lg font-medium mt-20 text-black border-b-2 w-max">
          View More
        </button>
      </div>
    </div>
  );
};

export default Services;
