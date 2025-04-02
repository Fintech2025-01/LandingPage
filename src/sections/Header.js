import React from "react";
import './Header.css'

function Header ({logo, scrollToSection, Popup, saccuLogo, cross}) {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="SACCU Banner" onClick={() => scrollToSection('Hero-section')}/>
        <nav className="App-nav-icons">
          <button className="Btn-header" onClick={() => scrollToSection('Hero-section')}>
            <b>Inicio</b>
          </button>
          <div className="Div-btns">
            <button className="Btn-header" onClick={() => scrollToSection('Hero-section')}>
              <b>Acerca</b>
            </button>
          </div>
          <button className="Btn-header" onClick={() => scrollToSection('Features-section')}>
            <b>Características</b>
          </button>
          <div className="Div-btns">
            <button className="Btn-header" onClick={() => scrollToSection('Contacts-section')}>
              <b>Contactos</b>
            </button>
          </div>
          <div className="Div-header-inscribite">
            <Popup className="Btn-header-inscribite" btnText={"Inscríbete"} cross={cross} nameClass="Btn-header-inscribite"/>
          </div>
        </nav>
      </header>
    );
}

export default Header;