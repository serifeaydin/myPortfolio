 
import Linkedln from "../assets/linkedln.png";
import Github from "../assets/github.png";
import HeroRight from "../assets/hero-right.png";

function Hero(){
    return(
        <div>
            <div>
                <p>Serife Aydin</p>
                <h1>I am a Frontend Developer...</h1>
                <p>...who likes to craft solid and scalable frontend products with great user experiences.</p>
            </div>
            <div> 
                
                <a href="" target="_blank">
                <button>
                    <img src={Github}/>
                    Github</button>
                </a>
            </div>
            <div>
            <a href="" target="_blank">
                <button>
                    <img src={Linkedln}/>
                    Linkedln</button>
                </a>
            </div>
            <div>
                <img src={HeroRight}></img>
            </div>
        </div>
    )
}

export default Hero;