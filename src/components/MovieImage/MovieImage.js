import React from 'react';
import './MovieImage.css';

const MovieImage = ({ image, title, text }) => {
  return (
    <div
      className="movieimage"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%),
      url('${image}'), #1c1c1c`
      }}
    >
      <div className="movieimage-content">
        <div className="movieimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieImage;
