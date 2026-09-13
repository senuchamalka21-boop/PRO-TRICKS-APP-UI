import React from 'react';
import TrickCard from './TrickCard';
import '../styles/Page.css';

const Saved = ({ savedTricks, onToggleSave, isSaved }) => {
  return (
    <div className="page">
      <div className="page-header">
        <h2>🔖 Saved Tricks</h2>
        <p>
          {savedTricks.length === 0
            ? 'No tricks saved yet'
            : `${savedTricks.length} trick${
                savedTricks.length > 1 ? 's' : ''
              } saved`}
        </p>
      </div>

      {savedTricks.length === 0 ? (
        <div className="empty-state">
          <i className="far fa-bookmark"></i>
          <h3>Nothing saved yet</h3>
          <p>Tap the bookmark icon on any trick to save it here.</p>
        </div>
      ) : (
        <div className="tricks-grid">
          {savedTricks.map((trick) => (
            <TrickCard
              key={trick.id}
              trick={trick}
              isSaved={true}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;