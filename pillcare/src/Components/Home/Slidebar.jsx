import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";

function Slidebar() {
  return (
    <div className="w-64 bg-white h-screen p-6 shadow-lg">
      <img src={LOGO} />

      <ul className="space-y-4 list-none">
        <li>
          <Link
            to="/home"
            className="text-teal-600 font-medium no-underline hover:text-teal-700 transition duration-200"
          >
            Resumen
          </Link>
        </li>
        <li>
          <Link
            to="/stats"
            className="text-gray-600 hover:text-teal-600 no-underline transition duration-200"
          >
            Estadísticas
          </Link>
        </li>
        <li>
          <Link
            to="/monitoring"
            className="text-gray-600 hover:text-teal-600 no-underline transition duration-200"
          >
            Monitorear
          </Link>
        </li>
      </ul>
      <div className="mt-10 border-t pt-4">
        <p className="text-gray-600">General</p>
        <ul className="space-y-4 list-none">
          <li>
            <Link
              to="/settings"
              className="text-gray-600 hover:text-teal-600 no-underline transition duration-200"
            >
              Configuración
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="text-gray-600 hover:text-teal-600 no-underline transition duration-200"
            >
              Ayuda
            </Link>
            </li>
            <li>
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Cerrar Sesión
            </Link>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Slidebar;
