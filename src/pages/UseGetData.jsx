import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { backendUrl } from "../constantas/backendUrl";


export const UseGetData = (path) => {
const [data,setData] = useState(null);
useEffect(()=>{
    async function getData(){
        try {
            const response = await axios.get(`${backendUrl}/${path}`);
            setData(response.data)
        } catch (error) {
            console.log("xatolik yuz berdi" , error);
        }
    }
    getData()
},[path])

return data;
 
 
}
