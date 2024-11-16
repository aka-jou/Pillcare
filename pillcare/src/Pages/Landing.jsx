import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-teal-600">PillCare</h1>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition duration-300"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-gray-100 text-teal-600 border border-teal-600 rounded hover:bg-teal-600 hover:text-white transition duration-300"
          >
            Crear cuenta
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow px-8 text-center">
        <h2 className="text-4xl font-semibold text-teal-600 mb-4">
          Bienvenido a PillCare
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          La plataforma diseñada para mejorar la salud y el bienestar de las
          personas mayores, garantizando que nunca olviden su medicación.
        </p>
        <img
          src="https://via.placeholder.com/800x400" // Cambia esto por una imagen real de tu proyecto
          alt="PillCare Preview"
          className="rounded-lg shadow-lg mb-8"
        />
        <Link
          to="/signup"
          className="px-6 py-3 bg-teal-600 text-white text-lg rounded hover:bg-teal-700 transition duration-300"
        >
          ¡Comienza ahora!
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            ¿Qué hace PillCare único?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium text-teal-600 mb-2">
                Monitoreo en Tiempo Real
              </h4>
              <p className="text-gray-700">
                Supervisamos la medicación en tiempo real, notificando al
                usuario y sus familiares sobre el estado de salud.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium text-teal-600 mb-2">
                Estadísticas Detalladas
              </h4>
              <p className="text-gray-700">
                Consulta gráficos y reportes sobre el cumplimiento de la
                medicación y la salud general del paciente.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium text-teal-600 mb-2">
                Notificaciones Inteligentes
              </h4>
              <p className="text-gray-700">
                Recordatorios por voz y alertas para garantizar que no se pase
                ninguna dosis importante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p>&copy; 2024 PillCare. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
