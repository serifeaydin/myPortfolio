import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { changeLanguage, changeMode } from '../store/actions';
import translations from '../translations';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const { language,darkMode } = state;
  const t = translations[language];
 

  const handleLanguageChange = () => {
  dispatch(changeLanguage());
  };

  const handleModeChange = () => {
    dispatch(changeMode());
  };

  return (
    <nav>
      <div className={`flex justify-end  ${darkMode ? 'bg-custom-gradient-dark' : 'bg-custom-gradient'} `} >
        <div className=''>
          <button onClick={handleLanguageChange} className= {`${ darkMode ? 'text-[#4731D3]':'text-[#CBF281]' } flex mr-10 `}>
            {state.language === 'en' ? "SWITCH TO TURKISH" : "İNGİLİZCE'YE GEÇ"}
          </button>
        </div>
        <div className='pr-64 '>
          <button onClick={handleModeChange} className={`${ darkMode ? 'text-[#CBF281]': 'text-[#4731D3]' } flex ml-5`}>
          {darkMode ? t.lightMode : t.darkMode}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;