import React, {useState} from 'react';
import {Image, FormGroup} from 'react-bootstrap';
import './Sidebar.scss'

export default function Sidebar() {
  const [tab, setTab] = useState(0);
  function handleSelectTab(e) {
    setTab(tab);
    console.log(tab);
  }
  return (
    <div className="sidebarWrapper">
      <FormGroup>
        <div 
          className="text-center items"
          onClick={handleSelectTab}>
          <Image src="./images/assets/notification.png" />
        </div>
      </FormGroup>

      <FormGroup>
        <div 
          className="text-center items"
          onClick={handleSelectTab}>
          <Image src="./images/assets/notification.png" />
        </div>
      </FormGroup>

      <FormGroup>
        <div 
          className="text-center items"
          onClick={handleSelectTab}>
          <Image src="./images/assets/notification.png" />
        </div>    
      </FormGroup>

      <FormGroup>
        <div 
          className="text-center items"
          onClick={handleSelectTab}>
          <Image src="./images/assets/notification.png" />
        </div>
      </FormGroup>
    </div>
  )
}