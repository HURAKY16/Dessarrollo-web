import React, { useState, useEffect } from 'react';  // Importa useState y useEffect
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
    path: "/contactos",   // Ruta para el componente 'Contactos' (sin espacio extra)
    element: <Contactos />,
  },
  {
    path: "/servicios",   // Ruta para el componente 'Servicios' (sin espacio extra)
    element: <Servicios />,
  },
  {
    path: "/adopcion",   // Ruta para el componente 'Adopcion' (sin espacio extra)
    element: <Adopcion />,
  },
]);

// Renderiza la aplicación usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const App = () => {
  const [usuarios, setUsuarios] = useState([]);  // Estado para manejar los usuarios

  useEffect(() => {
    // Hacer la solicitud GET a la API de Backend
    fetch('http://localhost:3001/api/usuarios')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error al obtener los usuarios:', error));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario._id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;