import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{ right: "75px", zIndex: 1 }}
    >
      <svg width="64" height="64" fill="white" opacity="0" viewBox="0 0 24 24">
        <path d="M9.293 17.707a1 1 0 0 1 0-1.414L13.586 12 9.293 7.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0z"></path>
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{ left: "75px", zIndex: 1 }}
    >
      <svg width="64" height="64" fill="white" opacity="0" viewBox="0 0 24 24">
        <path d="M14.707 17.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L10.414 12l4.293 4.293a1 1 0 0 1 0 1.414z"></path>
      </svg>
    </div>
  );
};

export { NextArrow, PrevArrow };
