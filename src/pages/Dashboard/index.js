import React, {useState} from 'react';
import Dashboard from './Dashboard';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Layout/Sidebar';

function DashboardContainer() {
  const [tabStatus, setTabStatus] = useState(0);
  return (
    <Layout>
      <Sidebar getTabStatus={_tab => setTabStatus(_tab)}/>
      <Dashboard tabStatus={tabStatus}/>
    </Layout>
  )
}

export default DashboardContainer;
