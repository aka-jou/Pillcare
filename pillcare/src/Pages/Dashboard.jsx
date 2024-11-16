import React from 'react';
import Header from '../Components/Home/Header';
import Slidebar from '../Components/Home/Slidebar';
import InfoCards from '../Components/Home/InfoCards';
import Statistics from '../Components/Home/Statistics';
import LatestTransactions from '../Components/Home/LatestTransactions';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Slidebar />
      <div className="flex flex-col flex-1 p-6">
        <Header />
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <InfoCards />
        </div>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Statistics />
          <LatestTransactions />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
