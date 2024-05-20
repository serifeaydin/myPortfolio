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
      <div className={`flex justify-end  ${darkMode ? 'bg-custom-gradient-dark' : 'bg-custom-gradient'}`} >
        <div>
          <button onClick={handleLanguageChange} className='text-[#CBF281] flex '>
            {state.language === 'en' ? "Switch to Turkish" : "İngilizce'ye geç"}
          </button>
        </div>
        <div>
          <button onClick={handleModeChange} className='text-[#4731D3] flex '>
           {t.darkMode}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;