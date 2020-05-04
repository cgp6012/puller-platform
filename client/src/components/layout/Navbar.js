import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-container">
      <div className="nav-style-line" />
      <div className="nav-list">
        <Link className="nav-list-item green-text center" style={{fontFamily: "monospace"}} to="/dashboard">
        <i className="material-icons">code</i>
         Puller Platform 
        </Link>
        <DropdownButton variant="success" title="Account Type" size="sm">
  <Dropdown.Item href="">ADMINISTRATOR</Dropdown.Item>
  <Dropdown.Item href="/dashboard">STANDARD</Dropdown.Item>
</DropdownButton>
        <Link className="nav-list-item" to="/dashboard">
          Home
        </Link>
        <Link className="nav-list-item" to="/admindashboard">
          Admin Home
        </Link>
        <Link className="nav-list-item" to="/adminpulls">
          Admin Pulls
        </Link>
        <Link className="nav-list-item" to="/adminpurchases">
          Admin Purchases
        </Link>
        <Link className="nav-list-item" to="/applayout">
          Admin Accounts
        </Link>
        <Link className="nav-list-item" to="/admintraining">
          Admin Training
        </Link>
        <Link className="nav-list-item" to="/adminusers">
          Admin Users
        </Link>
        <Link className="nav-list-item" to="/pullerfeed">
          Puller Feed
        </Link>
      </div>
    </nav>
    );
  }
}
export default Navbar;