import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      username: '',
      phone: '',
      assign: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          username: board.username,
          phone: board.phone,
          assign: board.assign
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, phone, assign } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      username,
      phone,
      assign
    }).then((docRef) => {
      this.setState({
        key: '',
        username: '',
        phone: '',
        assign: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
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
              Edit Assigned Account
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Account List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Username:</label>
                <input type="text" class="form-control" name="username" value={this.state.username} onChange={this.onChange} placeholder="Username" />
              </div>
              <div class="form-group">
                <label for="description">Phone Number:</label>
                <input type="text" class="form-control" name="phone" value={this.state.phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div class="form-group">
                <label for="author">Assign:</label>
                <input type="text" class="form-control" name="assign" value={this.state.assign} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;