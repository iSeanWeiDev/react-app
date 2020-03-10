import React from 'react';
import Dashboard from './Dashboard';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Layout/Sidebar';

function DashboardContainer() {
  return (
    <Layout>
      <Sidebar />
      <Dashboard />
    </Layout>
  )
}

export default DashboardContainer;
