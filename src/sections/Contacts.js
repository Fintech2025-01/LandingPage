import React from "react";
import './Contacts.css';

function Contacts({header}) {
    const socios = [
      {
      nombre: 'Jeronimo Vásquez Ponce',
      correo: 'j.vasquezp2@uniandes.edu.co',
      telefono: '+57 (316) 749-8546'
      },
      {
      nombre: 'Jairo Andres Fierro Fierro',
      correo: 'j.fierro@uniandes.edu.co',
      telefono: '+57 (310) 788-9550'
      },
      {
      nombre: 'Jacobo Zarruk Estrada',
      correo: 'j.zarruk@uniandes.edu.co',
      telefono: '+57 (316) 694-3046'
      },
      {
      nombre: 'Angel Farfán Arcila',
      correo: 'a.farfan@uniandes.edu.co',
      telefono: '+57 (302) 867-6684'
      },
      {
      nombre: 'Juan Sebastian Rodríguez Amador',
      correo: 'jsebasra03@gmail.com.com',
      telefono: '+57 (316) 423-2058'
      }];

    return (
    <div className="Contacts-section">
        <h2 className='Contact-header'>{header}</h2>
        <div className="Contact-body">
            {socios.map((socio, index) => (
              <div className="Contact-person" key={index}>
                <h3>{socio.nombre}</h3>
                <p>{socio.correo}</p>
                <p>{socio.telefono}</p>
              </div>
            ))}
        </div>
    </div>
    );
}

export default Contacts;