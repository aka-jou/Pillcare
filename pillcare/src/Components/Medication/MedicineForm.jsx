import React from "react";

function MedicineForm({ form, isEditing, onChange, onSave, onScanRfid }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {isEditing ? "Editar Medicamento" : "Agregar Medicamento"}
      </h3>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Nombre del Medicamento"
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="text"
        name="dosage"
        value={form.dosage}
        onChange={onChange}
        placeholder="Dosis"
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="text"
        name="frequency"
        value={form.frequency}
        onChange={onChange}
        placeholder="Frecuencia"
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="date"
        name="startDate"
        value={form.startDate}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <input
        type="date"
        name="endDate"
        value={form.endDate}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-md border mb-4"
      />
      <div className="flex items-center mb-4">
        <input
          type="text"
          name="rfidCode"
          value={form.rfidCode}
          onChange={onChange}
          placeholder="Código RFID"
          className="flex-grow px-4 py-2 rounded-md border"
        />
        <button
          onClick={onScanRfid}
          className="ml-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
        >
          Escanear RFID
        </button>
      </div>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300 w-full"
      >
        {isEditing ? "Guardar Cambios" : "Agregar Medicamento"}
      </button>
    </div>
  );
}

export default MedicineForm;
