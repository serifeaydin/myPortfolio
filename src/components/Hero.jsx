import React, { useContext } from "react";
import Linkedln from "../assets/linkedln.png";
import Github from "../assets/github.png";
import HeroRight from "../assets/hero-right.png";
import { AppContext } from "../context/AppContext.jsx";
import translations from "../translations.jsx";

function Hero() {
  const { state } = useContext(AppContext);
  const { language, darkMode } = state;
  const t = translations[language];

  return (
    <div className={`flex justify-center items-center ${darkMode ? 'bg-custom-gradient-dark' : 'bg-custom-gradient'}`}>
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
          <p className="text-2xl text-[#CBF281] mt-4">Serife Aydin</p>
          <h1 className="text-5xl font-bold mt-10 text-[#CBF281]">{t.title}</h1>
          <p className="text-white text-lg mt-4">{t.description}</p>
          <div className="flex mt-6 space-x-4">
            <a href="https://github.com/serifeaydin" target="_blank" rel="noopener noreferrer">
              <button className={`${darkMode ? 'bg-[#2B2727]' : 'bg-gray-100'} flex items-center px-4 py-2 border border-gray-300 rounded-md transition duration-300`}>
                <img className="w-6 h-6 mr-2" src={Github} alt="Github" />
                GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/serifeaydin" target="_blank" rel="noopener noreferrer">
              <button className={`${darkMode ? 'bg-[#2B2727]' : 'bg-gray-100'} flex items-center px-4 py-2 border border-gray-300 rounded-md transition duration-300`}>
                <img className="w-6 h-6 mr-2" src={Linkedln} alt="LinkedIn" />
                LinkedIn
              </button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img className="w-3/4 md:w-full" src={HeroRight} alt="Hero Right" />
        </div>
      </div>
    </div>
  );
}

export default Hero;