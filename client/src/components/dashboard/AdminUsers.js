import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class AdminUsers extends Component {
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
    <Card.Title>Accounts for Purchasing</Card.Title>
  </Card.Body>
</Card>
<div class='float-left'>
    <Button variant='success' size='sm'>Assign New Admin Account</Button>
    </div>
    <Card.Body></Card.Body>
    <Card.Body></Card.Body>
<Table responsive striped>
  <thead>
    <tr>
      <th>#</th>
      <th>Admin User</th>
      <th>Email</th>
      <th>Role</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Brian Reites</td>
      <td>brian@etainement.com</td>
      <td>Manager</td>
      <td>
      <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Alec Robinson</td>
      <td>alec@etainement.com</td>
      <td>Manager</td>
      <td>
      <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bob Vanderham</td>
      <td>bob@etainement.com</td>
      <td>Puller</td>
      <td>
      <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>Carson Poe</td>
      <td>carson@etainement.com</td>
      <td>Puller</td>
      <td>
      <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
      </td>
    </tr>
  </tbody>
</Table>
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
AdminUsers.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminUsers);