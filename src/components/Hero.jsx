 
import Linkedln from "../assets/linkedln.png";
import Github from "../assets/github.png";
import HeroRight from "../assets/hero-right.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import translations from "../translations.jsx";


function Hero(){
    const { state } = useContext(AppContext);
  const { language } = state;
  const t = translations[language];
    return(
        <div className=" flex bg-custom-gradient  h-[375px]">
      
      
        <div className="flex-col mt-20 w-[528px] ml-36">
        <p className=" ">Serife Aydin</p>
          <h1>{t.title}</h1>
          <p>{t.description}</p>
          <div className="flex">
            <div className=""> 
              <a href="" target="_blank">
                <button>
                  <img src={Github} alt="Github" />
                  Github
                </button>
              </a>
            </div>
            <div className="">
              <a href="" target="_blank">
                <button>
                  <img src={Linkedln} alt="LinkedIn" />
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[350px] h-[375px]" src={HeroRight} alt="Hero Right" />
        </div>
      </div>
   
  );
}

export default Hero;