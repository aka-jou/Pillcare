import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate('/pacientRegister'); // Redirige a la página de bienvenida o a la ruta de destino.
  };

  return (
    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl p-8">
      <h2 className="text-3xl font-semibold text-teal-600 mb-6">Crea tu cuenta</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Número de teléfono"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-300"
        >
          Unirse ahora
        </button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-600">¿Ya tienes una cuenta? </span>
        <Link to="/login" className="text-teal-600 hover:underline">
          Inicia sesión aquí
        </Link>
      </div>
    </div>
  );
}

export default SignupForm;
