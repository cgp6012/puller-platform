import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Card, Button, Jumbotron } from 'react-bootstrap';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
  <div>
    <div>
  <Card>
  <Card.Header>Please Accept by 9:30 AM</Card.Header>
  {/*
  <Card.Body>
    <Card.Title>Pulls Today</Card.Title>
    <Card.Text></Card.Text>
    <Card.Subtitle>10:00 AM | 11:00 AM | 12:00 PM | 1:00 PM</Card.Subtitle>
    <Card.Text></Card.Text>
    <Card.Text>Please accept by 9:30 AM</Card.Text>
    <Button variant="primary" >YES</Button>
    {"  "}
    <Button variant="primary" >NO</Button>
  </Card.Body> */}
</Card>
<Jumbotron>
  <h1 align="center">Will you be buying today?</h1>
  <p align="center">
 Today's Date: April 3, 2020
  </p>
  <h4 align="center">10:00 AM</h4>
  <p align="center">Justin Beiber - Paul Brown Stadium</p>
  <p align="center">
  <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
  </p>
  <p></p>
  <h4 align="center">11:00 AM</h4>
  <p align="center">Alanis Morissette - Paul Brown Stadium</p>
  <p align="center">BTS - Rose Bowl</p>
  <p align="center">
  <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
  </p>
  <h4 align="center">12:00 PM</h4>
  <p align="center">Rolling Stones - Xfinity Center</p>
  <p align="center">
  <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
  </p>
  <p></p>
  <h4 align="center">1:00 PM</h4>
  <p align="center">BTS - AT&T Stadium</p>
  <p align="center">
  <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
  </p>
</Jumbotron>
</div>
   {/* <Button
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </Button>
   */}
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);