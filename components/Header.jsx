import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const handleNotifications = () => {
    alert('🔔 No new notifications');
  };

  const handleProfile = () => {
    alert('👤 Profile coming soon!');
  };

  return (
    <div className="header">
      <div className="logo-area">
        <div className="logo-icon">
          <i className="fas fa-bolt"></i>
        </div>
        <div className="app-name">
          PRO <span>TRICKS</span>
        </div>
      </div>
      <div className="header-actions">
        <i
          className="far fa-bell"
          onClick={handleNotifications}
          role="button"
          tabIndex={0}
        ></i>
        <i
          className="far fa-user-circle"
          onClick={handleProfile}
          role="button"
          tabIndex={0}
        ></i>
      </div>
    </div>
  );
};

export default Header;