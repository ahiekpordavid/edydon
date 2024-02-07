import React from "react";
import Hero from "../components/Hero";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from "../assets/gal.jpg";
import image2 from "../assets/gal1.jpg";
import image3 from "../assets/plaster.jpg";
import image4 from "../assets/Carousel2.jpg";
import image5 from "../assets/img.jpg";
import image6 from "../assets/img4.jpg";
import image7 from "../assets/img3.jpg";
import image8 from "../assets/img1.jpg";
import image9 from "../assets/galle.jpg";
import image10 from "../assets/galle1.jpg";
import image12 from "../assets/galle2.jpg";
import image13 from "../assets/galle3.jpg";
import image11 from "../assets/galle4.jpg";
import image14 from "../assets/img2.jpg";
import image15 from "../assets/imga.jpg";
import image16 from "../assets/imga1.jpg";

const Gallary = () => {
    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
      const itemData = [
        {
          img: image1,
          title: 'un',
          rows: 2,
          cols: 2,
        },
        {
          img: image2,
          title: 'Burger',
        },
        {
          img: image3,
          title: 'Camera',
        },
        {
          img: image4,
          title: 'Coffee',
          cols: 2,
        },
        {
          img: image5,
          title: 'Hats',
          cols: 2,
        },
        {
          img: image6,
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
        },
        {
          img: image7,
          title: 'Basketball',
        },
        {
          img: image8,
          title: 'Fern',
        },
        {
          img: image9,
          title: 'Mushrooms',
          rows: 2,
          cols: 2,
        },
        {
          img: image10,
          title: 'Tomato basil',
        },
        {
          img: image11,
          title: 'Sea star',
        },
        {
          img: image12,
          title: 'Bike',
          cols: 2,
        },
        {
          img: image13,
          title: 'Bike',
          cols: 2,
        },
        {
          img: image14,
          title: 'Bike',
          cols: 2,
        },
        {
          img: image15,
          title: 'Bike',
          cols: 2,
        },
        {
          img: image16,
          title: 'Bike',
          cols: 2,
        },
      ];
  return (
    <div>
      <Hero />
      <div className="py-20 px-[200px]">
        <ImageList
          sx={{ width: "100%"}}
          variant="masonry"
          cols={3} gap={10}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Gallary;
