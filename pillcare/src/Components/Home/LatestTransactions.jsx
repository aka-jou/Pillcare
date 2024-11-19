import React from 'react';

function LatestTransactions() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-700">Medicación</h3>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left text-gray-600">Medicamento</th>
            <th className="text-left text-gray-600">Dosis</th>
            <th className="text-left text-gray-600">Proxima dosis</th>
            <th className="text-left text-gray-600">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-2">Paracetamol</td>
            <td>Dos pildoras/5mg</td>
            <td className="text-green-500">15 hrs</td>
            <td className="text-green-500">Estable</td>
          </tr>
       
        </tbody>
      </table>
    </div>
  );
}

export default LatestTransactions;
