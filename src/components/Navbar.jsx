import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { changeLanguage } from '../store/actions';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleLanguageChange = () => {
    dispatch(changeLanguage());
  };

  return (
    <nav>
      <button onClick={handleLanguageChange}>
        {state.language === 'en' ? 'Switch to Turkish' : 'Switch to English'}
      </button>
    </nav>
  );
};

export default Navbar;