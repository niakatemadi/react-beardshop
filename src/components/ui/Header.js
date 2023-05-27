import "../../styles/Header.scss";
import Logo from "../../assets/website_logo.png";
import { BsCartFill, BsFillPersonFill, BsSearch } from "react-icons/bs";
import { useState } from "react";
function Header(){
    

    return (
    <>
    <header className="Header">
        <div className="Header_search"> <BsSearch/></div>
        <div className="Header_logo">
            <img height="70px" width="70px" src={Logo} />
        </div>
        <ul className="Header_menu" >
            <li><p>Huiles</p></li>
            <li><p>Baumes</p></li>
            <li><p>Brosses</p></li>
            <li><p>Parfums</p></li>
        </ul>
        <div className="Header_iconsMenu"> 
            <div className="Button">
                <div className="Button_icon"><BsCartFill /></div>
                <p className="Button_text">Mon panier</p>
            
            </div>
            <div className="Button">
                <div className="Button_icon"><BsFillPersonFill /></div>
                <p className="Button_text">Mon espace</p>
            
            </div>
        </div>
    </header>
    </>
    )
}

export default Header;