import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Applayout extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { username, phone, assign } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        username,
        phone,
        assign,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
          <Card>
  <Card.Header>Please Accept by 9:30 AM</Card.Header>
  <Card.Body>
    <Card.Title>Assigned Accounts for Purchasing</Card.Title>
  </Card.Body>
</Card>
        <div class="panel panel-default">
          <div class="panel-heading">
          </div>
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-success">Assign New Account</Link></h4>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Phone Number</th>
                  <th>Assigned User</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.username}</Link></td>
                    <td>{board.phone}</td>
                    <td>{board.assign}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Applayout;