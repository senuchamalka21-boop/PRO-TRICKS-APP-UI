import React from 'react';
import '../styles/Categories.css';

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`cat-item ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(cat.id)}
        >
          <i className={`fas ${cat.icon}`}></i> {cat.label}
        </div>
      ))}
    </div>
  );
};

export default Categories;