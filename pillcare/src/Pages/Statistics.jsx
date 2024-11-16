import React from 'react';
import WeeklyChart from '../Components/Statistics.jsx/WeeklyChart';
import HealthSummary from '../Components/Statistics.jsx/HealthSummary';
import IndicatorCard from '../Components/Statistics.jsx/IndicatorCard';

function Statistics() {
    const data = {
        compliance: 85,       // Datos ficticios
        alerts: 5,
        healthStatus: 'Bueno'
      };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">Estadísticas de Medicación</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <WeeklyChart />
        </div>
        <div className="col-span-1">
          <HealthSummary data={data}/>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <IndicatorCard title="Cumplimiento de Medicación" value="95%" status="success" />
        <IndicatorCard title="Alertas de Salud" value="2" status="warning" />
        <IndicatorCard title="Notificaciones Enviadas" value="10" status="info" />
        <IndicatorCard title="Próxima Dosis" value="En 3 horas" status="default" />

      </div>
    </div>
  );
}

export default Statistics;
