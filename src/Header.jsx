import logo from "./assets/images/logo.png";
import user from "./assets/images/navbarIcon.svg";
import search from "./assets/images/search.svg";
import like from "./assets/images/like.svg";
import cart from "./assets/images/cart.svg";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="bg-[#FAF3EA] nav max-wh-[1440px] h-[100px] border  m-[auto]  flex items-center justify-around">
               <Link to="/"><img className="w-[185px] h-[41px]" src={logo} alt="" /></Link> 
                <div className="navbar__list w-[200px] h-[24px]  flex justify-between">
                <Link to="/" >Client</Link>
                <Link to="/admin" >Admin</Link>
                {/* <Link to="/about" >About</Link> */}
                {/* <Link to="/contact" >Contact</Link> */}
                </div>
                <div className="navbar__icons flex justify-between gap-10">
                    <img className="w-[28px] h-[28px]" src={user} alt="" />
                    <img className="w-[28px] h-[28px]"  src={search} alt="" />
                    <img className="w-[28px] h-[28px]"  src={like} alt="" />
                    <img className="w-[28px] h-[28px]"  src={cart} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header