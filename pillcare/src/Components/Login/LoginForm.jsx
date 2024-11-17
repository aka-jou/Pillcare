import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[550px] h-[600px] bg-gray-100 rounded-3xl flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6 text-center">
          Inicia sesión
        </h2>
        <form className="space-y-4 w-full max-w-xs">
          <div className="relative">
            <input
              type="text"
              id="username"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#42858C] bg-[#FDFDFD] rounded-[10px] border border-[#42858C] appearance-none focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-[#42858C] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Usuario
            </label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#42858C] bg-[#FDFDFD] rounded-[10px] border border-[#42858C] appearance-none focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-[#42858C] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Contraseña
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
          <Link
            to="/home"
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-300 transform active:scale-95 no-underline text-center block"
          >
            Ingresar
          </Link>
        </form>
        <div className="mt-4 flex justify-center items-center text-sm">
          <span className="text-gray-600 mr-1">¿No estás registrado?</span>
          <Link to="/signup" className="text-teal-600 hover:underline">
            Hazlo aquí
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
