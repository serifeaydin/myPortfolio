import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';
import translations from '../translations.jsx';
import Social from "../assets/socials.png";

function Footer() {
  const { state } = useContext(AppContext);
  const { language } = state;
  const t = translations[language];

  return (
    <div className="h-48">
      <div className="mt-10 flex justify-center">
        <h1>{t.footerSection.first}</h1>
        <h2>{t.footerSection.second}</h2>
        <p>serifeaydin@gmail.com</p>
      </div>
      <div className="flex mt-10">
        <img src={Social} alt="Social" />
      </div>
    </div>
  );
}

export default Footer;