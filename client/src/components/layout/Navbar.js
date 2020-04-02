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
        <Link className="nav-list-item" to="/pulls">
          Today's Pulls
        </Link>
        <Link className="nav-list-item" to="/purchases">
          Purchases | Earnings
        </Link>
        <Link className="nav-list-item" to="/accounts">
          Accounts
        </Link>
        <Link className="nav-list-item" to="/training">
          FAQ | Training
        </Link>
      </div>
    </nav>
    );
  }
}
export default Navbar;