import React from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';

const Dashboard = ({
  tabStatus
}) => {
  const dashboardElement = () => {
    let element = <Example1 />;
    switch(tabStatus) {
      case 0: 
        element = <Example1 />
        break;
      case 1:
        element = <Example2 />
        break;
      case 2: 
        element = <Example3 />
        break;
      case 3: 
        element = <Example4 />
        break;
      default:
        element = <Example1 />
        break;
    }
    return element;
  }
  return (
    <div>
      {dashboardElement()}
    </div>
  );
};

export default Dashboard;