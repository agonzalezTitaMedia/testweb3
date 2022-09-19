import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
    return(
        <nav className="menu-wrap">
            <Link to="zafiro" spy={true} smooth={true} offset={50} duration={500} >Zafiro</Link>
            <Link to="indigo" spy={true} smooth={true} offset={50} duration={500} >Índigo</Link>
            <Link to="cobalto" spy={true} smooth={true} offset={50} duration={500} >Cobalto</Link>
        </nav>
    )
}

export default Menu