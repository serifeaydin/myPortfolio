import React, { useContext } from "react";
import ReactLogo from "../assets/react-logo.png";
import JavaLogo from "../assets/js-logo.png";
import VsCodeLogo from "../assets/vs-logo.png";
import NodeLogo from "../assets/node-logo.png";
import ReduxLogo from "../assets/redux.png";
import FigmaLogo from "../assets/figma-logo.png";
import translations from "../translations";
import { AppContext } from "../context/AppContext";

function Skills() {
  const { state } = useContext(AppContext);
  const { language, darkMode } = state;
  const t = translations[language];

  return (
    <div className="container mx-auto px-4">
      <div className=" mt-10">
        <h1 className={`${darkMode ? 'text-[#CBF281]' : 'text-[#4731D3]'} text-5xl font-bold`}>{t.skills}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-20 pl-48">
        <div className="flex items-center">
          <img className="w-20 h-20 mr-4" src={ReactLogo} alt="React" />
          <p className="text-3xl text-[#777777]">REACT</p>
        </div>
        <div className="flex items-center">
          <img className="w-20 h-20 mr-4" src={VsCodeLogo} alt="VS Code" />
          <p className="text-3xl text-[#777777]">VS CODE</p>
        </div>
        <div className="flex items-center">
          <img className="w-20 h-20 mr-4" src={ReduxLogo} alt="Redux" />
          <p className="text-3xl text-[#777777]">REDUX</p>
        </div>
        <div className="flex items-center">
          <img className="w-20 h-20 mr-4" src={JavaLogo} alt="JavaScript" />
          <p className="text-3xl text-[#777777]">JAVASCRIPT</p>
        </div>
        <div className="flex items-center">
          <img className="w-20 h-20 mr-4" src={FigmaLogo} alt="Figma" />
          <p className="text-3xl text-[#777777]">FIGMA</p>
        </div>
        <div className="flex items-center">
          <img className="w-20 h-20 mr-4" src={NodeLogo} alt="Node.js" />
          <p className="text-3xl text-[#777777]">NODE</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;