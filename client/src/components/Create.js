import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      username: '',
      phone: '',
      assign: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, phone, assign } = this.state;

    this.ref.add({
      username,
      phone,
      assign
    }).then((docRef) => {
      this.setState({
        username: '',
        phone: '',
        assign: ''
      });
      this.props.history.push("/applayout")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { username, phone, assign } = this.state;
    return (
      <div class="container">
          <Card>
  <Card.Header>Please Accept by 9:30 AM</Card.Header>
  <Card.Body>
    <Card.Title>Assigned Accounts for Purchasing</Card.Title>
  </Card.Body>
</Card>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add Account
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/applayout" class="btn btn-primary">Account List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Username:</label>
                <input type="text" class="form-control" name="username" value={username} onChange={this.onChange} placeholder="Username" />
              </div>
              <div class="form-group">
                <label for="description">Phone Number:</label>
                <input type="text" class="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div class="form-group">
                <label for="author">Assigned:</label>
                <input type="text" class="form-control" name="assign" value={assign} onChange={this.onChange} placeholder="Assign" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;