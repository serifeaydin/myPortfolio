import {useState,useEffect} from "react";


function Header(){
    const[darkMode,setDarkMode]=useState(false);

    useEffect(()=>{
        const savedDarkMode =localStorage.getItem("darkMode")==="true";
        setDarkMode(savedDarkMode);

        document.body.classList.toggle("dark",savedDarkMode);
    },[]);

    const toggleDarkMode=()=>{
        const newDarkMode = !darkMode;

        localStorage.setItem("darkMode",newDarkMode);
        document.body.classList.toggle("dark",newDarkMode);
        setDarkMode(newDarkMode);
    };

    return (

<div className="">
<button onClick ={toggleDarkMode}>
    <p>{darkMode? "light mode":"dark mode"}</p>
    
</button>
</div>
    );
}
export default Header;