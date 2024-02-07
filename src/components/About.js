import React from "react";
import image from "../assets/About.jpg";

const About = () => {
  return (
    <div className=" bg-white flex flex-row relative py-[70px] px-[350px] justify-end">
      <div className="text-black bg-white w-[550px] h-[450px] absolute left-[330px] top-[130px] shadow-2xl p-20 flex flex-col gap-10 justify-center">
        <p className="text-4xl font-semibold text-blue-400">Edydon Services Ltd</p>
        <p className="text-xl">
          A family run business based in Coventry, West Midlands UK. We have
          about 20 years worth of experience in dry-lining finishing (taping and
          jointing). We have a pool of good, professional, experienced and
          qualified tapers to meet your taping and jointing needs.
        </p>
        <div>
          <button className="uppercase text-lg font-medium border-b-2">Read More</button>
        </div>
      </div>
      <img
        src={image}
        alt="about"
        className="w-[800px] h-[580px] object-cover"
      />
    </div>
  );
};

export default About;
