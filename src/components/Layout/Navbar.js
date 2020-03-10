import React from 'react';
import {Nav, Image, InputGroup, FormControl} from 'react-bootstrap';
import './Navbar.scss';

function Navbar() {
  return (
    <Nav className="navbar">
      <Nav.Item>
        <Nav.Link href="/">
          <Image 
            className="logo"
            src="./images/logo.png" />
        </Nav.Link>
      </Nav.Item>
      <div clasName="form-inline">
        <div className="searchBar">
          <InputGroup>
            <InputGroup.Prepend>
              <Image src="./images/assets/searchIcon.png" />
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search e.g. live instagram channel"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="notification">
          <Image src="./images/assets/notification.png" />
          <span>12</span>
        </div>
        <div className="avatar">
          <Image src="./images/assets/avatar.png" />
        </div>
      </div>
    </Nav>
  )
}

export default Navbar;
