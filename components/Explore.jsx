import React from 'react';
import TrickCard from './TrickCard';
import { tricksData } from '../data/tricksData';
import '../styles/Page.css';

const Explore = ({ savedTricks, onToggleSave, isSaved }) => {
  return (
    <div className="page">
      <div className="page-header">
        <h2>🧭 Explore</h2>
        <p>{tricksData.length} tricks available</p>
      </div>
      <div className="tricks-grid">
        {tricksData.map((trick) => (
          <TrickCard
            key={trick.id}
            trick={trick}
            isSaved={isSaved ? isSaved(trick) : false}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;