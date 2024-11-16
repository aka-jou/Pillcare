import React, { useEffect, useState } from 'react';

function RealTimeMonitoring() {
  const [medicationStatus, setMedicationStatus] = useState('En tiempo');
  const [alert, setAlert] = useState('');

  // Simulación de monitoreo en tiempo real
  useEffect(() => {
    const timer = setInterval(() => {
      // Aquí se podrían realizar verificaciones de estado de la medicación y actualizar la alerta
      const randomCheck = Math.random();
      if (randomCheck < 0.2) {
        setMedicationStatus('Retrasado');
        setAlert('Alerta: La dosis no se ha tomado a tiempo.');
      } else if (randomCheck < 0.4) {
        setMedicationStatus('Cumplido');
        setAlert('Notificación: Medicación tomada a tiempo.');
      } else {
        setMedicationStatus('En tiempo');
        setAlert('');
      }
    }, 5000); // Cada 5 segundos simula un cambio de estado

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">Monitoreo en Tiempo Real</h2>

      {/* Notificación de Alerta */}
      {alert && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 w-full max-w-2xl">
          <strong className="font-bold">¡Alerta!</strong>
          <span className="block sm:inline ml-2">{alert}</span>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        {/* Estado de la medicación */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Estado de la Medicación</h3>
          <span
            className={`text-sm font-semibold px-4 py-1 rounded-full ${
              medicationStatus === 'En tiempo'
                ? 'bg-green-100 text-green-700'
                : medicationStatus === 'Cumplido'
                ? 'bg-teal-100 text-teal-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {medicationStatus}
          </span>
        </div>

        {/* Información de Medicación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-4 shadow-md">
            <p className="text-lg font-medium text-gray-600">Dosis Programada</p>
            <p className="text-2xl font-semibold text-teal-600">3:00 PM</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-4 shadow-md">
            <p className="text-lg font-medium text-gray-600">Próxima Dosis</p>
            <p className="text-2xl font-semibold text-teal-600">8:00 PM</p>
          </div>
        </div>

        {/* Historial de Medicación */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Historial de Dosis Recientes</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Fecha</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Hora</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">20/12/2023</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">3:00 PM</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-teal-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-teal-200 opacity-50 rounded-full"></span>
                      <span className="relative">Cumplido</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">20/12/2023</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">8:00 PM</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                      <span className="relative">Retrasado</span>
                    </span>
                  </td>
                </tr>
                {/* Más filas aquí */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeMonitoring;
