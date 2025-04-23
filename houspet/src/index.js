import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from './Inicio';
import Equipo from './Components/Equipo';
import Contactos from './Contactos';
import Servicios from './Servicios';
import Adopcion from './Adopcion';

// Define tus rutas con createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",   // Ruta para el componente 'Inicio'
    element: <Inicio />,
  },
  {
    path: "/equipo",   // Ruta para el componente 'Equipo'
    element: <Equipo />,
  },
  {
    path: "/Contactos",   // Ruta para el componente 'Equipo'
    element: <  Contactos />,
  },
  {
    path: "/Servicios",   // Ruta para el componente 'Equipo'
    element: <  Servicios />,
  },
  {
    path: "/Adopcion ",   // Ruta para el componente 'Equipo'
    element: <  Adopcion />,
  },
]); 

// Renderiza la aplicación usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
