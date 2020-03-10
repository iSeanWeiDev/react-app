import React, {useState} from 'react';
import {Image, FormGroup} from 'react-bootstrap';
import './Sidebar.scss'

export default function Sidebar() {
  const [tab, setTab] = useState(0);
  const handleSelectTab = index => {
    setTab(index);
  }
  return (
    <div className="sidebarWrapper">
      <FormGroup>
        <div 
          className={tab === 0 ? "text-center items active" : "text-center items"}
          onClick={()=>handleSelectTab(0)}>
          <Image src="./images/assets/notification.png" />
        </div>
      </FormGroup>

      <FormGroup>
        <div 
          className={tab === 1 ? "text-center items active" : "text-center items"}
          onClick={()=>handleSelectTab(1)}>
          <Image src="./images/assets/notification.png" />
        </div>
      </FormGroup>

      <FormGroup>
        <div 
          className={tab === 2 ? "text-center items active" : "text-center items"}
          onClick={()=>handleSelectTab(2)}>
          <Image src="./images/assets/notification.png" />
        </div>    
      </FormGroup>

      <FormGroup>
        <div 
          className={tab === 3 ? "text-center items active" : "text-center items"}
          onClick={()=>handleSelectTab(3)}>
          <Image src="./images/assets/notification.png" />
        </div>
      </FormGroup>
    </div>
  )
}