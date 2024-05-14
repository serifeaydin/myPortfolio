import React from "react";

import Social from "../assets/socials.png";

function Footer(){
    return(
<div className="  h-48">
    <div className=" mt-10 flex justify-center">
    <h1 >Send me a message!</h1>
    <h2>Got a question or proposal,or just want to say hello?Go ahead!
    </h2>
    <p>
    serifeaydin@gmail.com</p>
    </div>
    <div className="flex mt-10">
        
        <img src={Social}/>


    </div>
</div>
    )
}
export default Footer;