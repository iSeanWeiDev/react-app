import React, {useState} from 'react';
import {FormGroup} from 'react-bootstrap';
import {House, Gear, DocumentRichtext, Bookmark} from 'react-bootstrap-icons'
import './Sidebar.scss'

export default function Sidebar({
  getTabStatus
}) {
  const [tab, setTab] = useState(0);
  const handleSelectTab = index => {
    setTab(index);
    getTabStatus(index);
  }
  return (
    <div className="sidebarWrapper">
      <FormGroup>
        <div 
          className={tab === 0 ? "text-center items active" : "text-center items"}
          onClick={()=>handleSelectTab(0)}>
          <House className="icons"/>
        </div>
      </FormGroup>

      <FormGroup>
        <div 
          className={tab === 1 ? "text-center items active" : "text-center items"}
          onClick={()=>handleSelectTab(1)}>
          <DocumentRichtext className="icons" />
        </div>
      </FormGroup>

      <FormGroup>
        <div 
          className={tab === 2 ? "text-center items active" : "text-center items"}
          onClick={()=>handleSelectTab(2)}>
          <Bookmark className="icons" />
        </div>    
      </FormGroup>

      <FormGroup>
        <div 
          className={tab === 3 ? "text-center items active" : "text-center items"}
          onClick={()=>handleSelectTab(3)}>
          <Gear className="icons" />
        </div>
      </FormGroup>
    </div>
  )
}