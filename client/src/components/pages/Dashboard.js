import React from 'react';
import DashboardTemplate from '../templates/DashboardTemplate';
import Header from '../organisms/header/Header';
import Sidebar from '../organisms/sidebar/Sidebar';
import Footer from '../organisms/footer/Footer';
import MainDahboard from '../organisms/mainDashboard/MainDashboard';

const Dashboard = () => {
  return (
    <DashboardTemplate
      header={<Header />}
      sidebar={<Sidebar />}
      footer={<Footer />}
    >
      <MainDahboard />
    </DashboardTemplate>
  );
};

export default Dashboard;
