import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 to-blue-600 text-white p-5 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">
          Sistema de Gestión Pedagógica
        </h1>
        <p>Apoyo Educativo TDAH</p>
      </div>

      <div className="flex gap-6 text-lg">
        <Link to="/">Dashboard</Link>
        <Link to="/students">Estudiantes</Link>
        <Link to="/robot">Control Robótico</Link>
        <Link to="/settings">Configuración</Link>
        <Link to="/sessions">Sesiones</Link>
      </div>
    </nav>
  );
}

export default Navbar;