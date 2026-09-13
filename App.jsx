import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FeaturedBanner from './components/FeaturedBanner';
import Categories from './components/Categories';
import TricksGrid from './components/TricksGrid';
import BottomNav from './components/BottomNav';
import Explore from './components/Explore';
import Saved from './components/Saved';
import Profile from './components/Profile';
import { tricksData, categoriesData } from './data/tricksData';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedTricks, setSavedTricks] = useState([]);

  // Toggle save/unsave for a trick
  const toggleSave = (trick) => {
    setSavedTricks((prev) => {
      const exists = prev.find((t) => t.id === trick.id);
      if (exists) {
        return prev.filter((t) => t.id !== trick.id);
      }
      return [...prev, trick];
    });
  };

  const isSaved = (trick) => savedTricks.some((t) => t.id === trick.id);

  // Filter tricks for Home page
  const filteredTricks = tricksData.filter((trick) => {
    const matchCategory =
      activeCategory === 'all' || trick.category === activeCategory;
    const matchSearch =
      trick.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trick.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Render the correct page based on active tab
  const renderPage = () => {
    switch (activeTab) {
      case 'explore':
        return (
          <Explore
            savedTricks={savedTricks}
            onToggleSave={toggleSave}
            isSaved={isSaved}
          />
        );

      case 'saved':
        return (
          <Saved
            savedTricks={savedTricks}
            onToggleSave={toggleSave}
            isSaved={isSaved}
          />
        );

      case 'profile':
        return <Profile savedCount={savedTricks.length} />;

      case 'home':
      default:
        return (
          <>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <FeaturedBanner />
            <Categories
              categories={categoriesData}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <TricksGrid
              tricks={filteredTricks}
              savedTricks={savedTricks}
              onToggleSave={toggleSave}
              isSaved={isSaved}
            />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="page-container">{renderPage()}</div>
      <div className="divider"></div>
      <BottomNav active={activeTab} setActive={setActiveTab} />
    </div>
  );
}

export default App;