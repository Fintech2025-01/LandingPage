import React, { useState } from 'react';
import validator from 'validator';
import {db, collection, addDoc, auth} from './GuardarCorreos';
import './Popup.css';

function Popup({btnText, cross, nameClass}) {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNews, setAcceptNews] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    setName('');
    setTel('');
    setEmail('');
    setAcceptTerms(false);
    setAcceptNews(false);
    setIsValidEmail(true);
    setErrorMessage('');
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setErrorMessage('');
  };

  const handleTelChange = (e) => {
    const value = e.target.value;
    setTel(value);
    setErrorMessage('');
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (validator.isEmail(value)) {
      setIsValidEmail(true);
      setErrorMessage('');
    } else {
      setIsValidEmail(false);
    }
  };

  const changeAcceptTerms = (e) => {
    setAcceptTerms(e.target.checked);
    setErrorMessage('');
  };

  const register = async () => {
    if (!name || !tel || !email) {
      setErrorMessage('Hay una o más casillas que no has llenado.');
    } else if (!isValidEmail) {
      setErrorMessage('Por favor, ingresa un correo válido.');
    } else if (!acceptTerms) {
      setErrorMessage('Por favor, acepta los términos y condiciones.');
    } else {
      try {
        await addDoc(collection(db, 'emails'), {
          name: name,
          telphone: tel,
          email: email,
          timestamp: new Date(),
          userId: auth.currentUser.uid,
          news: acceptNews,
          betaShared: false,
        });
        setErrorMessage('');
        closePopup();
      } catch (error) {
        console.error('Error al guardar el correo:', error);
        setErrorMessage('Hubo un error al guardar el correo.');
      }
    }
  };

  return (
    <div>
      <button className={nameClass} onClick={openPopup}>
        <b>{btnText}</b>
      </button>
      {isOpen && (
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={closePopup} className="Btn-cerrar-popup">
            <img className="Icon-cross" src={cross} alt="Cerrar" />
          </button>
          <h2 className="txtPopup">¿Quieres ser parte de la comunidad?</h2>
          <p className="txtPopup">
            Ingresa tus datos y recibiras noticas de SACCU
          </p>
          <div className='div-input'>
          <input className="input" placeholder="Ingresa tu nombre" value={name} onChange={handleNameChange}/>
          <input className="input" type="tel" placeholder="Ingresa tu número" value={tel} onChange={handleTelChange}/>
          <input className="input" type="email" placeholder="Ingresa tu correo" value={email} onChange={handleEmailChange}/>
          </div>
          {errorMessage && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
              {errorMessage}
            </p>
          )}
          <div className="checkbox-container">
            <label>
              <input type="checkbox" className="checkbox" checked={acceptTerms} onChange={changeAcceptTerms}/>
              Acepto términos y condiciones.
            </label>
            <label>
              <input type="checkbox" className="checkbox" checked={acceptNews} onChange={(e) => setAcceptNews(e.target.checked)}/>
              Acepto que me envíen noticias (Opcional).
            </label>
          </div>
          <button onClick={register} className="Btn-registrarse">
            Regístrame
          </button>
        </div>
      )}
    </div>
  );
}

export default Popup;