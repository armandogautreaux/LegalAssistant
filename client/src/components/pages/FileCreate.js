import React from 'react';
import DashboardTemplate from '../templates/DashboardTemplate';
import Header from '../organisms/header/Header';
import Sidebar from '../organisms/sidebar/Sidebar';
import Footer from '../organisms/footer/Footer';
import FileCreateContainer from '../organisms/files/FileCreateContainer';

const FileCreate = () => {
  return (
    <DashboardTemplate
      header={<Header />}
      sidebar={<Sidebar />}
      footer={<Footer />}
    >
      <FileCreateContainer />
    </DashboardTemplate>
  );
};

export default FileCreate;
