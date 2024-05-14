
import React from "react";
import ReactLogo from "../assets/react-logo.png"
import JavaLogo from "../assets/js-logo.png";
import VsCodeLogo from "../assets/vs-logo.png";
import NodeLogo from "../assets/node-logo.png";
import ReduxLogo from "../assets/redux.png";
import FigmaLogo from "../assets/figma-logo.png";

function Skills(){
    return(
      <div className="flex  justify-center h-96 mt-20  mb-20 space-x-16 mr-48">
  
         <div className="">
        <h1 className="text-[#4832D3] text-5xl font-bold mr-12 ">Skills</h1>
        </div>
        <div class="flex-col ">
        
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
           
           
          
           
      
   

     )  
}
export default Skills;