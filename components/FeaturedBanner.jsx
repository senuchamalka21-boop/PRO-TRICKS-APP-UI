import React from 'react';
import '../styles/FeaturedBanner.css';

const FeaturedBanner = () => {
  const handleLearn = () => {
    alert('▶️ Starting lesson: 360° Fadeaway');
  };

  return (
    <div className="featured-banner">
      <div className="banner-text">
        <h3>⚡ featured trick</h3>
        <h2>360° Fadeaway</h2>
        <p>
          <i className="fas fa-fire"></i> +2.4k athletes learning
        </p>
      </div>
      <button className="banner-btn" onClick={handleLearn}>
        <i className="fas fa-play"></i> LEARN
      </button>
    </div>
  );
};

export default FeaturedBanner;