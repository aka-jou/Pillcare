import React, { useState } from "react";

function UserSettings() {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    password: "",
    newPassword: "",
    notifications: true,
    theme: "light",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Configuraciones actualizadas con éxito");
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">Configuración del Usuario</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full space-y-6"
      >
        {/* Nombre completo */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Nombre Completo</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Cambiar contraseña */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Contraseña Actual</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Nueva Contraseña</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Notificaciones */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleInputChange}
            className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label className="text-gray-700">Recibir notificaciones por correo electrónico</label>
        </div>

        {/* Tema */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Tema</label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
          </select>
        </div>

        {/* Botón de guardar */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default UserSettings;
