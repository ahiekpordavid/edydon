import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title:
      "Edydon Services have worked with us at CDL Partitions Ltd for 18 months in Birmingham and Sheffield carrying out all our tape and joint requirements to a very high standard. Their expertise and attention to detail is excellent and we would recommend them highly.",
    name: "Bob Chamberlain M.D.",
    company: "CDL partitions Ltd",
  },
  {
    title:
      "We use edydon services on all our projects. They supply a fantastic standard of work both on and off the tools and never fail to deliver on time. I would highly recommend them for a professional service.",
    name: "Andy Fells, MD",
    company: "BAL INTERIORS LTD",
  },
  {
    title:
      "We have used EDYDON SERVICES LTD on a number of our projects. I am confident to say that you one of the best in taping and jointing. Your quality of work and professionalism is highly recommendable",
    name: "Gareth",
    company: "CID site manager",
  },
  {
    title:
      "I find Eddie of Edydon services Ltd to be an outstanding and  exemplary at his profession. Very conscientious of quality and presentation of work with continued proven ability to adapt and implement procedures. I have a good and comfortable relationship with trust at the root thereof.",
    name: "Clifford Jones - Site manager",
    company: "CDL partitions Ltd.",
  },
];
const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="container mx-auto py-[100px] px-[250px]">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className="text-black text-center"
          >
            <p className="text-2xl text-center mb-[40px]">"{item.title}"</p>
            <p className="text-xl font-bold">{item.name}</p>
            <p className="text-md font-extralight">{item.company}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
