
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import { AppProvider } from './context/AppContext';


  function App(){
    
  return (
    <div >
          <AppProvider>
            <Navbar/>
      <Header/>
      <Hero/>
    <Skills/>
    <Profile/>
    <Footer/>
    </AppProvider>
    </div>
     
)
}
export default App;
