import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./albums.css";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

const Photo = ({ closeBtn, album, photoArray }) => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow className="slick-prev" />,
    nextArrow: <NextArrow className="slick-next" />,
  };

  return (
    <div className="photo_container">
      <Slider {...sliderSettings}>
        {photoArray
          .filter((element) => element.albumId === album.id)
          .map((element) => (
            <div key={element.id}>
              <img src={element.url} alt={element.id} />
            </div>
          ))}
      </Slider>
      <button onClick={() => closeBtn(album.id)} className="photo_close_btn">
        Close Photos
      </button>
    </div>
  );
};

export default Photo;
