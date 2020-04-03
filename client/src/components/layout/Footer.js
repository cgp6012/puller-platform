import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div class="footer">
           <Link className="nav-list-item green-text center" style={{fontFamily: "monospace"}} to="/dashboard">
        <i className="material-icons">code</i>
         Puller Platform 
        </Link>
      </div>
    );
  }
}
export default Footer;