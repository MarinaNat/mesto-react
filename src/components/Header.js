import React from "react";
import headerLogo from './../images/logo.svg'

function Header() {
    return (
        <header className="header">
        <a className="header__link" href="#">
            <img className="logo" src={headerLogo} alt="Логотипп" />
        </a>
      </header>
    );
}

export default Header;