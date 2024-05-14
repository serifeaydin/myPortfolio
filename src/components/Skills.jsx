
import React from "react";
import ReactLogo from "../assets/react-logo.png"
import JavaLogo from "../assets/js-logo.png";
import VsCodeLogo from "../assets/vs-logo.png";
import NodeLogo from "../assets/node-logo.png";
import ReduxLogo from "../assets/redux.png";
import FigmaLogo from "../assets/figma-logo.png";

function Skills(){
    return(
    <div class=" h-[671px] ">
           <div class="flex w-[960px] h-[430px]">
        <h1 >Skills</h1>
          
        <div class="flex-col w-[145px] h-[430px]">
        
          <img class="w-[120px] h-[120px]" src={ReactLogo} />
            
          <img class="w-[120px] h-[120px]"src={VsCodeLogo}/>
         
          <img class="w-[120px] h-[120px]" src={ReduxLogo}/>
          <div class="flex-col w-[145px] h-[430px]"> <p>REDUX</p>
           <p>REACT</p>
           <p>VS CODE</p></div>
          
         </div>
          <div class="flex-col w-[290px] h-[430px]">
            <img class="w-[120px] h-[120px]" src={JavaLogo}/>
           <p>JAVASCRIPT</p>
           <img class="w-[120px] h-[120px]" src={FigmaLogo}/>
          <p>FIGMA</p>
          <img class="w-[120px] h-[120px]" src={NodeLogo} />
          <p>NODE</p>
          </div>
           </div>
           </div>

           
           
      
   

     )  
}
export default Skills;