import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';
import translations from '../translations.jsx';
import Social from "../assets/socials.png";

function Footer() {
  const { state } = useContext(AppContext);
  const { language,darkMode} = state;
  const t = translations[language];

  return (
    <div className={`${darkMode ? 'bg-[#2B2727]' : 'bg-white'} py-20 `} >
      <div className="  flex-col text-center">
        <h1 className={`${darkMode ? 'text-[#4731D3]':'text-[#4731D3]'} font-bold text-3xl`}>{t.footerSection.first}</h1>
        <h2 className={`${darkMode ? 'text-white' : 'text-[#4731D3]'} mt-5`}>{t.footerSection.second}</h2>
        <p className={`${darkMode ? 'text-[#4731D3]' : 'text-[#4731D3]'} underline mt-5`}>serifecevik93@gmail.com</p>
      </div>
      <div className="flex mt-10 justify-center">
        <img src={Social} alt="Social" />
      </div>
    </div>
  );
}

export default Footer;