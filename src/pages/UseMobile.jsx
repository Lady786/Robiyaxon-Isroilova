import { useEffect, useState } from "react"


export const UseMobile = () => {
 const [isMobile, setIsMobile] = useState(false);
 useEffect(()=>{
    const resize = window.addEventListener("resize", ()=>{
        console.log("resize.....");
        const windowWidth = window.innerWidth;
        if (windowWidth<= 600) {
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    });
    return function () {
        window.removeEventListener("resize" , resize)
    }

 }, []);
 return isMobile
}
