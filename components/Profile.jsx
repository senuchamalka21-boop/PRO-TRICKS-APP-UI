import React from 'react';
import '../styles/Page.css';

const Profile = ({ savedCount }) => {
  return (
    <div className="page">
      <div className="profile-header">
        <div className="profile-avatar">
          <i className="fas fa-user"></i>
        </div>
        <h2>Athlete</h2>
        <p>Level 1 · New Member</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{savedCount}</span>
          <span className="stat-label">Saved</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">0</span>
          <span className="stat-label">Done</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">0</span>
          <span className="stat-label">Streak</span>
        </div>
      </div>

      <div className="profile-menu">
        <div className="menu-item">
          <i className="fas fa-cog"></i>
          <span>Settings</span>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="menu-item">
          <i className="fas fa-trophy"></i>
          <span>Achievements</span>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="menu-item">
          <i className="fas fa-question-circle"></i>
          <span>Help & Support</span>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Profile;