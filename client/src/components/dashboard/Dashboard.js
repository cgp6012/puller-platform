import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Card, Button } from 'react-bootstrap';

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
  <Card.Body>
    <Card.Title>Pulls Today</Card.Title>
    <Card.Text></Card.Text>
    <Card.Subtitle>10:00 AM | 11:00 AM | 12:00 PM | 1:00 PM</Card.Subtitle>
    <Card.Text></Card.Text>
    <Card.Text>Please accept by 9:30 AM</Card.Text>
    <Button variant="primary" >YES</Button>
    {"  "}
    <Button variant="primary" >NO</Button>
  </Card.Body>
</Card>
</div>
    <Button
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </Button>
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
