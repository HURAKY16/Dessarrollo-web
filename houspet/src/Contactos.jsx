import React from "react";
import Navbar from "./Components/Navbar";

const Contactos = () => {
  return (
    <>
      <Navbar />
      <div className="contactos-container">
        <h2 className="titulo-contacto">Contáctanos</h2>
        <div className="info-contacto">
          <div className="contacto-item">
            <strong>Dirección:</strong>
            <p>calle 65 i # 60 - 70</p>
          </div>
          <div className="contacto-item">
            <strong>Teléfono:</strong>
            <p>+57 3226851679</p>
          </div>
          <div className="contacto-item">
            <strong>Correo:</strong>
            <p>contacto@houspet.com</p>
          </div>
          <div className="contacto-item">
            <strong>Redes Sociales:</strong>
            <p>
              <a href="https://facebook.com/houspet" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>{" "}
              |{" "}
              <a href="https://instagram.com/houspet" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactos;