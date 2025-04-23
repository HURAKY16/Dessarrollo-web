import React from "react";
import Navbar from "./Components/Navbar";

const mascotas = [
  {
    nombre: "Luna",
    edad: "2 años",
    raza: "Labrador",
    descripcion: "Cariñosa, juguetona y muy obediente. Ideal para familias.",
    imagen: "https://www.javer-keleb.com/wp-content/uploads/2023/11/photo_2023-05-31_21-03-51.jpg"
  },
  {
    nombre: "Max",
    edad: "3 años",
    raza: "Beagle",
    descripcion: "Energético y leal. Le encanta correr y jugar al aire libre.",
    imagen: "https://content.elmueble.com/medio/2023/03/02/perro-de-raza-beagle_67c65dda_230302133829_900x900.jpg"
  },
  {
    nombre: "Michi",
    edad: "1 año",
    raza: "Mestizo",
    descripcion: "Dulce y tranquilo. Adora dormir en lugares soleados.",
    imagen: "https://somosmaka.com/cdn/shop/articles/perro_mestizo.jpg?v=1697855331"
  },
  {
    nombre: "Rocky",
    edad: "4 años",
    raza: "Pastor Alemán",
    descripcion: "Valiente, protector y muy inteligente.",
    imagen: "https://es.mypet.com/wp-content/uploads/sites/23/2021/03/razas-de-perros-pastor-aleman-570x455-1.jpg"
  }
];

const Adopcion = () => {
  return (
    <>
      <Navbar />
      <div className="adopcion-container">
        <h2 className="titulo-adopcion">Mascotas en Adopción</h2>
        <div className="tarjetas-mascotas">
          {mascotas.map((mascota, index) => (
            <div key={index} className="tarjeta-mascota">
              <img src={mascota.imagen} alt={mascota.nombre} />
              <h3>{mascota.nombre}</h3>
              <p><strong>Edad:</strong> {mascota.edad}</p>
              <p><strong>Raza:</strong> {mascota.raza}</p>
              <p>{mascota.descripcion}</p>
              <button className="boton-adoptar">Adoptar</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Adopcion;