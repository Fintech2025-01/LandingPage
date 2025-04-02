import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Feature from './sections/Features';
import CallToAction from './sections/CallToAction';
import Popup from './sections/Popup';
import Gallery from './sections/Gallery';
import Contacts from './sections/Contacts';
import logo from './imgs/SACCU_NoBackground.png';
import saccuLogo from './imgs/SACCU_Logo.jpeg';
import cross from './imgs/cross.png';
import plus from './imgs/plus.png';
import minus from './imgs/minus.png';
import './App.css';

function scrollToSection(sectionClass) {
  const section = document.querySelector(`.${sectionClass}`);
  const headerHeight = document.querySelector('.App-header').offsetHeight;
  if (section) {
    const sectionPosition = section.offsetTop - headerHeight;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  }
}

function App() {
  return (
    <div className="App">
      <Header className="App-header" logo={logo} scrollToSection={scrollToSection} Popup={Popup} saccuLogo={saccuLogo} cross={cross}/>
      <div className="App-body">
        <Hero className="Hero-section"/>
        <Feature className="Features-section" plus={plus} minus={minus}/>
        <CallToAction className="CallToAction-section" Popup={Popup} saccuLogo={saccuLogo} cross={cross}/>
        <Gallery className="Gallery-section"/>
        <Contacts className="Contacts-section" header={"Contáctanos"}/>
        <footer className="App-footer">
          <p>&copy; 2025 SACCU. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;