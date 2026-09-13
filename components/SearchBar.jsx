import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleFilter = () => {
    alert('🎛️ Advanced filters coming soon!');
  };

  return (
    <div className="search-bar">
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search tricks, athletes, skills..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <i
        className="fas fa-sliders-h filter-icon"
        onClick={handleFilter}
        role="button"
        tabIndex={0}
      ></i>
    </div>
  );
};

export default SearchBar;