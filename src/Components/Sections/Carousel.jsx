import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../../Utils/CustomArrows';

const Carousel = ({ height }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div className={`w-full py-12 ${height}`}>
      <Slider {...settings} className="carousel-container">
        <div className="h-64 bg-yellow-200 flex flex-row justify-center items-center text-yellow-950 p-8 text-xl rounded-xl mx-2">
          <h1 className="font-lexendDeca text-h4 font-bold">"5 Kesalahan Umum dalam Proses Ekspor Rempah dan Cara Menghindarinya"</h1>
        </div>
        <div className="h-64 bg-yellow-200 flex justify-center items-center text-yellow-950 p-8 text-xl rounded-xl mx-2">
          <h1 className="font-lexendDeca text-h4 font-bold">"Inovasi Digital di Dunia Pertanian: Spicita.id Dorong Transformasi Ekspor Rempah"</h1>
        </div>
        <div className="h-64 bg-yellow-200 flex justify-center items-center text-yellow-950 p-8 text-xl rounded-xl mx-2">
          <h1 className="font-lexendDeca text-h4 font-bold">"Kerja Sama Spicita.id dengan Koperasi Petani untuk Tingkatkan Literasi Ekspor"</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
