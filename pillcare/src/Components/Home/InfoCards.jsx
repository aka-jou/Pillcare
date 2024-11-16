import React from 'react';

function InfoCards() {
  const info = [
    { title: 'Paciente', illness: 'Diabetes Tipo 2', image: 'https://via.placeholder.com/100' },
    { title: 'Spendings' },
    { title: 'Savings' },
  ];

  const userInfo = {
    name: 'Juan Pérez',
    age: 65,
    status: 'Estable',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {info.map((item, index) => (
        <div
          key={index}
          className={`bg-white p-6 rounded-lg shadow-lg ${
            item.title === 'Paciente' ? 'col-span-2' : ''
          }`}
        >
          <p className="text-gray-600">{item.title}</p>
          {item.title === 'Paciente' && (
            <>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={`Imagen de ${userInfo.name}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-gray-700">
                    Nombre: {userInfo.name}
                  </p>
                  <p className="text-md text-gray-600">
                    Enfermedad: {item.illness}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p><strong>Edad:</strong> {userInfo.age}</p>
                <p><strong>Estado:</strong> {userInfo.status}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
