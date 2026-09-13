import React from 'react';
import '../styles/BottomNav.css';

const BottomNav = ({ active, setActive }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'explore', label: 'Explore', icon: 'fa-compass' },
    { id: 'saved', label: 'Saved', icon: 'fa-bookmark' },
    { id: 'profile', label: 'Profile', icon: 'fa-user' },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${active === item.id ? 'active' : ''}`}
          onClick={() => setActive(item.id)}
        >
          <i className={`fas ${item.icon}`}></i>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;