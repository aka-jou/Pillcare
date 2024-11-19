import React, { useState, useEffect } from "react";
import axios from "axios";

function ManageMedicines() {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    rfidCode: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [rfidScanning, setRfidScanning] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Fetch medicines on component load
  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await axios.get("https://tu-backend.com/medicines");
      setMedicines(response.data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSaveMedicine = async () => {
    try {
      if (isEditing) {
        await axios.put(`https://tu-backend.com/medicines/${form.id}`, form);
      } else {
        await axios.post("https://tu-backend.com/medicines", form);
      }
      fetchMedicines();
      resetForm();
      setStatusMessage("¡Medicamento guardado exitosamente!");
    } catch (error) {
      console.error("Error saving medicine:", error);
      setStatusMessage("Error al guardar el medicamento.");
    }
  };

  const handleDeleteMedicine = async (id) => {
    try {
      await axios.delete(`https://tu-backend.com/medicines/${id}`);
      fetchMedicines();
      setStatusMessage("¡Medicamento eliminado exitosamente!");
    } catch (error) {
      console.error("Error deleting medicine:", error);
      setStatusMessage("Error al eliminar el medicamento.");
    }
  };

  const handleEditMedicine = (medicine) => {
    setForm(medicine);
    setIsEditing(true);
  };

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      dosage: "",
      frequency: "",
      startDate: "",
      endDate: "",
      rfidCode: "",
    });
    setIsEditing(false);
    setStatusMessage("");
  };

  const handleScanRfid = () => {
    // Simula la lectura de RFID
    const simulatedRfid = "12345RFID"; // Simulación de RFID
    setForm({ ...form, rfidCode: simulatedRfid });
    setStatusMessage("Código RFID escaneado correctamente.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">
        Gestión de Medicamentos
      </h2>

      {/* Formulario de Gestión */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {isEditing ? "Editar Medicamento" : "Agregar Medicamento"}
        </h3>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Nombre del Medicamento"
          className="w-full px-4 py-2 rounded-md border mb-4"
        />
        <input
          type="text"
          name="dosage"
          value={form.dosage}
          onChange={handleInputChange}
          placeholder="Dosis"
          className="w-full px-4 py-2 rounded-md border mb-4"
        />
        <input
          type="text"
          name="frequency"
          value={form.frequency}
          onChange={handleInputChange}
          placeholder="Frecuencia"
          className="w-full px-4 py-2 rounded-md border mb-4"
        />
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleInputChange}
          placeholder="Fecha de Inicio"
          className="w-full px-4 py-2 rounded-md border mb-4"
        />
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleInputChange}
          placeholder="Fecha de Fin"
          className="w-full px-4 py-2 rounded-md border mb-4"
        />
        <div className="flex items-center mb-4">
          <input
            type="text"
            name="rfidCode"
            value={form.rfidCode}
            onChange={handleInputChange}
            placeholder="Código RFID"
            className="flex-grow px-4 py-2 rounded-md border"
          />
          <button
            onClick={handleScanRfid}
            className="ml-2 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
          >
            Escanear RFID
          </button>
        </div>
        <button
          onClick={handleSaveMedicine}
          className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-300"
        >
          {isEditing ? "Actualizar" : "Guardar"}
        </button>
      </div>

      {/* Tabla de Medicamentos */}
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
                    onClick={() => handleEditMedicine(medicine)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteMedicine(medicine.id)}
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

      {/* Mensaje de estado */}
      {statusMessage && (
        <p className="mt-4 text-center text-sm text-teal-700">{statusMessage}</p>
      )}
    </div>
  );
}

export default ManageMedicines;
