import React from "react";
import Logo from "../../assets/logo.png"

const Topo = () => {
    return(
        <header>
            <div>
                <img src={Logo} alt="Gelateria"/>
            </div>
            <nav>
                <a href="">Home</a>
                <a href="">Sabores</a>
                <a href="">Sobre</a>
            </nav>
        </header>
    );
}

export default Topo;