import React from 'react';
import '../styles/TrickCard.css';

const TrickCard = ({ trick, isSaved, onToggleSave }) => {
  const handleClick = () => {
    console.log(`Opening: ${trick.title}`);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    if (onToggleSave) onToggleSave(trick);
  };

  return (
    <div className="trick-card" onClick={handleClick}>
      <div className="trick-card-top">
        <div className="trick-icon">
          <i className={`fas ${trick.icon}`}></i>
        </div>
        <button
          className={`bookmark-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleBookmark}
          aria-label={isSaved ? 'Unsave' : 'Save'}
        >
          <i className={isSaved ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>
        </button>
      </div>

      <h5>{trick.title}</h5>
      <div className="trick-meta">
        <span>
          <i className="fas fa-clock"></i> {trick.duration}
        </span>
        <span className="difficulty">
          {[1, 2, 3].map((level) => (
            <span
              key={level}
              className={`dot ${level <= trick.difficulty ? 'fill' : ''}`}
            ></span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default TrickCard;