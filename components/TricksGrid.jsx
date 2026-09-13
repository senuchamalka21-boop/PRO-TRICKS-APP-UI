import React from 'react';
import TrickCard from './TrickCard';
import '../styles/TricksGrid.css';

const TricksGrid = ({ tricks, savedTricks = [], onToggleSave, isSaved }) => {
  const handleSeeAll = (e) => {
    e.preventDefault();
    console.log('See all clicked');
  };

  return (
    <>
      <div className="section-header">
        <h4>🔥 Trending tricks</h4>
        <a href="#see-all" onClick={handleSeeAll}>
          See all <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      {tricks.length === 0 ? (
        <div className="no-results">
          <i className="fas fa-search"></i>
          <p>No tricks found. Try a different search.</p>
        </div>
      ) : (
        <div className="tricks-grid">
          {tricks.map((trick) => (
            <TrickCard
              key={trick.id}
              trick={trick}
              isSaved={isSaved ? isSaved(trick) : false}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TricksGrid;