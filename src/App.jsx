

import './App.css';
import Footer from './components/Footer';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

import Skills from './components/Skills';
import { AppContext, AppProvider } from './context/AppContext';
import Project from './components/Project';
import { useContext } from 'react';



function AppContent() {
  const { state } = useContext(AppContext);

  return (
    <div className={`min-h-screen ${state.darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <Navbar />
      <Hero />
      <Skills />
      <Profile />
      <Project />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;