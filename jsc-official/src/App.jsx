import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Leaders from './components/Leaders';
import UpcomingEvents from './components/UpcomingEvents';
import RecentUploads from './components/RecentUploads';
import PublicEvents from './components/PublicEvents';
import Publications from './components/Publications';
import Downloads from './components/Downloads';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import QuranSurahs from './components/QuranSurahs';
import Surah from './components/Surah';

const App = () => {
const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'leaders', 'upcomingEvents', 'recentUploads', 'publicEvents', 'publications', 'downloads', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <UpcomingEvents />
            <Leaders />
            <RecentUploads />
            <PublicEvents />
            <Publications />
            <Downloads />
            <Contact />
          </>
        } />
        <Route path="/quran" element={<QuranSurahs />} />
        <Route path="/surah/:id" element={<Surah />} />
      </Routes>
      <Footer />
    </div>
  );

};

export default App;