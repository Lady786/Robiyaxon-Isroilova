// import group from "./assets/images/group.svg";
// import protection from "./assets/images/protection.svg";
// import shipping from "./assets/images/shipping.svg";
// import support from "./assets/images/support.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
           
            <div className=" mt-[20px] bg-[#FAF3EA] footer__bottom w-full h-[400px] m-[auto] flex justify-around pt-[30px]">
                <div className="funiro  w-[172px] flex flex-col justify-between h-[150px]">
                    <h1 className="font-bold text-[32px]">Funiro.</h1>
                    <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>
                <div className="footer__links flex flex-col justify-between h-[112px] ">
                    <p className="text-[#9F9F9F] text-[24px]">Links</p>
                    <Link to="/" >Client</Link>
                    <Link to="/admin" >Admin</Link>
                   
                </div>
                <div className="footer__help flex flex-col justify-between h-[212px]">
                    <p className="text-[#9F9F9F] text-[24px]">Help</p>
                    <Link to="#" >Payment Options</Link>
                    <Link to="#" >Returns</Link>
                    <Link to="#" >Privacy Policies</Link>
                </div>
                <div className="footer__news flex flex-col justify-between h-[100px]">
                    <p className="text-[#9F9F9F] text-[24px]">Newsletter</p>
                    <p className="text-[#9F9F9F] text-[20px]">Enter Your Email Address <span className="text-black underline">SUBSCRIBE</span></p>
                   
                </div>
            </div>
            
                

        </div>
    )
}

export default Footer