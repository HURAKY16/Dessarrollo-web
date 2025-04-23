import React from "react";
import Navbar from "./Components/Navbar";


const servicios = [
    {
      titulo: "Baño y Peluquería",
      descripcion: "Deja a tu peludito limpio, perfumado y con estilo.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8IQPty353O2B3rwApPZFcbPL0LHn9gB60g&s", // perro con jabón
    },
    {
      titulo: "Consulta Veterinaria",
      descripcion: "Revisión y cuidado profesional para tu mascota.",
      imagen: "https://cdn-icons-png.flaticon.com/512/1509/1509840.png", // veterinario con mascota
    },
    {
      titulo: "Paseos y Actividades",   
      descripcion: "Paseadores responsables y actividades recreativas.",
      imagen: "https://png.pngtree.com/png-clipart/20190903/original/pngtree-pet-dog-icon-png-image_4421639.jpg", //     paseando perro
    },
    {
      titulo: "Guardería para Mascotas",
      descripcion: "Un espacio divertido y seguro mientras estás fuera.",
      imagen: "https://cdn-icons-png.flaticon.com/512/5775/5775247.png", // mascota feliz en casita
    }
  ];
const Servicios = () => {
  return (
    <>
      <Navbar />
      <div className="servicios-container">
        <h2 className="titulo-servicios">Nuestros Servicios</h2>
        <div className="tarjetas-servicios">
          {servicios.map((servicio, index) => (
            <div key={index} className="tarjeta-servicio">
              <img src={servicio.imagen} alt={servicio.titulo} />
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Servicios;