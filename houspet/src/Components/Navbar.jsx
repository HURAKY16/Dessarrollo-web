import './Diseños.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Houspet</div>
      <div className="navbar-botones">
        <Link to="/" className="botones">Inicio</Link>
        <Link to="/Servicios" className="botones">Servicios</Link>
        <Link to="/Contactos" className="botones">Contactos</Link>
        <Link to="" className="botones">Dona</Link>
        <Link to="/Adopcion " className="botones">Adopta</Link>
        <Link to="/Equipo" className="botones">Equipo</Link>
        <button onClick={() => window.scrollTo({ top: document.getElementById("Historias").offsetTop, behavior: "smooth" })} className='botones'>Historias</button>
      </div>

      <div className="navbar-search">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
        />
      </div>
    </nav>

  );
};

export default Navbar;