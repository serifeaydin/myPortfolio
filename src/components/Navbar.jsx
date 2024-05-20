import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { changeLanguage, changeMode } from '../store/actions';
import translations from '../translations';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const { language, darkMode } = state;
  const t = translations[language];

  const handleLanguageChange = () => {
    dispatch(changeLanguage());
  };

  const handleModeChange = () => {
    dispatch(changeMode());
  };

  return (
    <nav>
      <div className={`flex justify-end p-4 ${darkMode ? 'bg-custom-gradient-dark' : 'bg-custom-gradient'} pr-48`}>
        <button onClick={handleLanguageChange} className={`${darkMode ? 'text-[#4731D3]' : 'text-[#CBF281]'} `}>
          {state.language === 'en' ? "SWITCH TO TURKISH" : "İNGİLİZCE'YE GEÇ"}
        </button>
        <div className="flex items-center ">
          <label htmlFor="dark-mode-toggle" className={`mr-3 ${darkMode ? 'text-[#CBF281]' : 'text-[#4731D3]'} pl-16`}>
            {darkMode ? t.lightMode : t.darkMode}
          </label>
          <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in ">
            <input
              type="checkbox"
              name="dark-mode-toggle"
              id="dark-mode-toggle"
              checked={darkMode}
              onChange={handleModeChange}
              className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="dark-mode-toggle"
              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${darkMode ? 'bg-gray-900' : 'bg-gray-300'}`}
            ></label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;