import React from "react";

function MedicinesTable({ medicines, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full">
      <h3 className="text-lg font-semibold mb-4">Lista de Medicamentos</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">Nombre</th>
            <th className="border-b px-4 py-2">Dosis</th>
            <th className="border-b px-4 py-2">Frecuencia</th>
            <th className="border-b px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td className="border-b px-4 py-2">{medicine.name}</td>
              <td className="border-b px-4 py-2">{medicine.dosage}</td>
              <td className="border-b px-4 py-2">{medicine.frequency}</td>
              <td className="border-b px-4 py-2 space-x-2">
                <button
                  onClick={() => onEdit(medicine)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(medicine.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicinesTable;
