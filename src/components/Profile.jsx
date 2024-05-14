
import React from "react";
import Image2 from "../assets/image2.png";

function Profile(){
    return(
        <div className=" bg-indigo-700 flex justify-center">
           <div className="  mt-10  w-1/5">
            <h1 className="font-bold text-5xl mb-6 mt-10  text-lime-400">Profile</h1>
            <div className="flex-col ">
            <h2 className="font-semibold text-3xl mb-4  text-gray-50">Basic Information</h2>
            <div className="flex pr-4 text-lg">
            <h3 className="font-semibold  text-lime-400">Date of Birth</h3> <p className=" text-gray-50">02.01.1993</p>
            </div>
            <div className="flex text-lg">
            <h3 className="font-semibold  text-lime-400">City</h3> <p className=" text-gray-50">Izmir</p>
            </div>
            <div className="flex text-lg  text-gray-50">
            <h3 className="font-semibold text-lime-400">Education</h3><div className="flex-col"><p>-Tekirdag Namik Kemal University-Electronic and Telecomunication Engineering </p>
            <p>-Universidad Politécnica de Madrid-ETS Ingeniería y Sistemas de Telecomunicación(Erasmus)</p>
            <p>-Anadolu University- Labor Economics and Industrial Relations</p></div> 
            </div>
           </div>
           </div>
           
            <div className=" w-1/4 mt-40 ml-10 mr-10">
          
            <img src={Image2} />

            </div>
            <div className="w-1/5 mt-36 text-lg">
                <h2 className="font-semibold text-3xl  text-gray-50">About Me</h2>
                <p className="text-gray-50">Hi,my name is Serife. I am 31,married and have 2-years-old son.I enjoy cooking, growing flowers, and traveling and learning about different cultures.I have always been interested in software. I had the opportunity to improve myself with Workintech.</p>
            </div>
       
     
        </div>
    )}
    export default Profile;