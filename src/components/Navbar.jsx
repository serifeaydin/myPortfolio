import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { changeLanguage, changeMode } from '../store/actions';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleLanguageChange = () => {
    dispatch(changeLanguage());
  };

  const handleModeChange = () => {
    dispatch(changeMode());
    
  };

  return (
    <nav>
    <div className='bg-custom-gradient flex justify-between'>
     
        <div>
      <button onClick={handleLanguageChange} className='text-[#CBF281] flex '>
        {state.language === 'en' ? "Switch to Turkish" : "İngilizce'ye geç"}
      </button>
      </div>
      <div>
    <button onClick={handleModeChange} className='text-[#4731D3] flex '>
     Dark Mode
  </button>
  </div>
 
  </div>
  </nav>
  );
};

export default Navbar;