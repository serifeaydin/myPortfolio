import React, { useContext } from "react";
import ReactLogo from "../assets/react-logo.png"
import JavaLogo from "../assets/js-logo.png";
import VsCodeLogo from "../assets/vs-logo.png";
import NodeLogo from "../assets/node-logo.png";
import ReduxLogo from "../assets/redux.png";
import FigmaLogo from "../assets/figma-logo.png";
import translations from "../translations";
import { AppContext } from "../context/AppContext";

function Skills(){
  const { state } = useContext(AppContext);
  const { language,darkMode} = state;
  const t = translations[language];
  return(
<div>

    <div className="flex mx-8 mt-10"  >
    <h1 className={`${darkMode ? 'text-[#CBF281]':'text-[#4731D3]'} text-5xl font-bold  `}>{t.skills}</h1>
    </div>
    <div className="flex justify-center mb-20 h-96 space-x-16 ">

      
   
      <div class="flex-col  ">
      
        <img class="w-30 h-30 mb-6" src={ReactLogo} />
        <img class="w-30 h-30 mb-6"src={VsCodeLogo}/>
        <img class="w-30 h-30 mb-6" src={ReduxLogo}/>
        </div>
      <div className=" text-3xl text-[#777777]">
        
        <p className="mt-10">REACT</p>
         <p className="mt-24">VS CODE</p>
         <p className="mt-28">REDUX</p>
        
         
      </div>
     
   
      

        <div class="flex-col ">
        
        <img class="w-30 h-30 mb-6" src={JavaLogo}/>
        <img class="w-30 h-30 mb-6" src={FigmaLogo}/>
        <img class="w-30 h-30 mb-6" src={NodeLogo} />
        
        </div>

        <div className="text-3xl text-[#777777]">
        <p className="mt-10">JAVASCRIPT</p>
        <p className="mt-24">FIGMA</p>
        <p className="mt-28"> NODE</p>

        </div>
         </div>
         
      
        
         
         </div>
 

   )  
}
export default Skills; 