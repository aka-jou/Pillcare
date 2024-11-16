import React from 'react';

function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-4xl mb-6">
        <h2 className="text-2xl font-semibold text-teal-600">Perfil del Paciente</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border rounded-lg border-gray-300 text-gray-700">Unirse a Lobby</button>
          <button className="px-4 py-2 rounded-lg bg-teal-600 text-white">Iniciar Evaluación</button>
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full flex space-x-8">
        {/* User Info */}
        <div className="flex-shrink-0">
          <img src="/path/to/avatar.png" alt="Avatar" className="w-32 h-32 rounded-full shadow-md" />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold">John Willis</h3>
          <p className="text-gray-500">En tratamiento para: <strong>Hipertensión</strong></p>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Progreso del tratamiento</p>
            <div className="bg-gray-200 rounded-full h-3 mt-1">
              <div className="bg-teal-500 h-3 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-right text-sm text-gray-400">3000 / 8000 XP</p>
          </div>
          <div className="flex space-x-8 mt-4">
            <div className="text-center">
              <p className="text-2xl font-semibold">27</p>
              <p className="text-gray-500 text-sm">Dosis Tomadas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">5</p>
              <p className="text-gray-500 text-sm">Días Restantes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold">90%</p>
              <p className="text-gray-500 text-sm">Adherencia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats and Inventory */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl w-full">
        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Indicadores</h3>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <img src="/path/to/indicator1.png" alt="Indicator 1" className="w-12 h-12 mb-2" />
              <p className="text-sm">Cumplimiento</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path/to/indicator2.png" alt="Indicator 2" className="w-12 h-12 mb-2" />
              <p className="text-sm">Estabilidad</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path/to/indicator3.png" alt="Indicator 3" className="w-12 h-12 mb-2" />
              <p className="text-sm">Avance</p>
            </div>
          </div>
        </div>

        {/* Inventory */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Estado de Salud</h3>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <img src="/path/to/status1.png" alt="Status 1" className="w-12 h-12 mb-2" />
              <p className="text-sm">Estable</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path/to/status2.png" alt="Status 2" className="w-12 h-12 mb-2" />
              <p className="text-sm">Monitor</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path/to/status3.png" alt="Status 3" className="w-12 h-12 mb-2" />
              <p className="text-sm">Atención</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
