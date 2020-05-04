import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/applayout")
    }).catch((error) => {
      console.error("Error removing document: ", error);
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
          <h4><Link to="/applayout">Account List</Link></h4>
            <h3 class="panel-title">
              {this.state.board.username}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Phone Number:</dt>
              <dd>{this.state.board.phone}</dd>
              <dt>Assigned:</dt>
              <dd>{this.state.board.assign}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;