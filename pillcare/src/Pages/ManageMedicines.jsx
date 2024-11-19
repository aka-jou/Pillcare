import React, { useState, useEffect } from "react";
import axios from "axios";
import MedicinesTable from "../Components/Medication/MedicinesTable";
import MedicineForm from "../Components/Medication/MedicineForm";
import StatusMessage from "../Components/Medication/StatusMessage";

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
  const [statusMessage, setStatusMessage] = useState("");

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

  const handleScanRfid = () => {
    const simulatedRfid = "12345RFID"; // Simulación de RFID
    setForm({ ...form, rfidCode: simulatedRfid });
    setStatusMessage("Código RFID escaneado correctamente.");
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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">
        Gestión de Medicamentos
      </h2>
      <MedicineForm
        form={form}
        isEditing={isEditing}
        onChange={handleInputChange}
        onSave={handleSaveMedicine}
        onScanRfid={handleScanRfid}
      />
      <MedicinesTable
        medicines={medicines}
        onEdit={handleEditMedicine}
        onDelete={handleDeleteMedicine}
      />
      <StatusMessage message={statusMessage} />
    </div>
  );
}

export default ManageMedicines;
