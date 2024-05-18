

import './App.css';
import Footer from './components/Footer';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

import Skills from './components/Skills';
import { AppProvider } from './context/AppContext';
import Project from './components/Project';


  function App(){
    
  return (
    <div >
          <AppProvider>
            <Navbar/>
    
      <Hero/>
    <Skills/>
    <Profile/>
    <Project/>
    <Footer/>
    </AppProvider>
    </div>
     
)
}
export default App;
