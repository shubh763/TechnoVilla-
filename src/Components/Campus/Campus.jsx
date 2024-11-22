import React from "react";
import Slider from "react-slick"; // Import the slider
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Default number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay in ms
    arrows: true, // Show previous and next arrows
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides for tablets/desktops
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide for mobile devices
        },
      },
    ],
  };

  return (
    <div className="campus">
      <Slider {...settings} className="gallery">
        <div>
          <img src={gallery_1} alt="Gallery 1" />
        </div>
        <div>
          <img src={gallery_2} alt="Gallery 2" />
        </div>
        <div>
          <img src={gallery_3} alt="Gallery 3" />
        </div>
        <div>
          <img src={gallery_4} alt="Gallery 4" />
        </div>
      </Slider>
      <div style={{ marginTop: "41px" }}>
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Campus;
