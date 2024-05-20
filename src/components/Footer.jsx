import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';
import translations from '../translations.jsx';
import Attt from "../assets/at-sign 1.png";
import Codepen from "../assets/codepen 1.png";
import Twitter from "../assets/Vectortwitter.png";
import Instagram from "../assets/instagram 1.png";


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
      <div className="flex mt-10  justify-center">

        <a href="mailto:serifecevik93@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-2xl no-underline mr-4">
          <button>
            <img src={Attt} alt="at"/>
          </button>
         </a>
          <a href="https://codepen.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-2xl no-underline mr-4">
          <button>
            <img src={Codepen} alt="codepen"/>
          </button>
        </a>

        <a href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-2xl no-underline mr-4">
          <button>
            <img src={Twitter} alt="twitter"/>
          </button>


        </a>

        <a href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-2xl no-underline">
          <button>
            <img src={Instagram} alt="instagram"/>
          </button>


        </a>
       
       
       
      </div>
    </div>
  );
}

export default Footer;