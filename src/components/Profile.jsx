import React from "react";
import Image2 from "../assets/image2.png";

function Profile(){
    return(
        <div className=" flex bg-indigo-700  h-[552px] ">

<div className="mt-24 ml-28">
<h1 className="text-lime-400 text-5xl font-bold mb-10">Profile</h1>
<h2 className="text-3xl text-white mb-[10px] ">Basic Informations</h2>
           <div className=" flex w-[300px] h-[290] ">
           

            <div className="flex-col mt-[10px]  text-[#CBF281] w-[150px] h-[202px] font-semibold text-lg">
                <p className="pb-2.5">Date of Birth</p>
                <p className="pb-2.5">City</p>
                <p className="pb-2.5">Education </p>
                <p className=" pt-7">Preferred Role</p>
            </div>
           <div className="flex-col mt-2.5 text-white w-64 text-lg">
             <p className="pb-2.5">24.12.1993</p>
             <p className="pb-2.5">Izmir</p>
             <p className="pb-2.5">Hacettepe Ünv.Biyoloji Lisans,2016</p>
             <p className="pb-2.5">Frontend Developer</p>
           </div>

</div>
</div>

            <div className=" flex">
            <img className="mt-32"src={Image2} />
            </div>
           
           
            <div className="mt-44 w-96 h-72 mr-28">
                <h2 className="text-3xl text-white mb-6">About Me</h2>
                <p className="text-gray-50 text-lg">Hi,my name is Serife. I am 31,married and have 2-years-old son.I enjoy cooking, growing flowers, and traveling and learning about different cultures.I have always been interested in software. I had the opportunity to improve myself with Workintech.</p>
            </div>
       
     
        </div>
       
    )}
    export default Profile;