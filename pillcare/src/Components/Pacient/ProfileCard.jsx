import React, { useState, useEffect } from "react";

function ProfileCard({ progress }) {
  const [progressBarWidth, setProgressBarWidth] = useState(0);


  useEffect(() => {
    if (progress >= 0 && progress <= 100) {
      setProgressBarWidth(progress);
    }
  }, [progress]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full flex space-x-8">

      <div className="flex-shrink-0">
        <img alt="Perfil del paciente" className="w-32 h-32 rounded-full shadow-md" />
      </div>

    
      <div className="flex-grow">
        <h3 className="text-xl font-semibold">John Willis</h3>
        <p className="text-gray-500">
          En tratamiento para: <strong>Hipertensión</strong>
        </p>

  
        <div className="mt-4">
          <p className="text-sm text-gray-500">Progreso del tratamiento</p>
          <div className="bg-gray-200 rounded-full h-3 mt-1 relative overflow-hidden">
            <div
              className="bg-teal-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressBarWidth}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-400">{progressBarWidth}% completado</p>
        </div>

    
        <div className="flex space-x-8 mt-6">
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
  );
}

export default ProfileCard;
