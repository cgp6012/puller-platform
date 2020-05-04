import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class AppEvent extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('events');
    this.unsubscribe = null;
    this.state = {
      events: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const events = [];
    querySnapshot.forEach((doc) => {
      const { time, eventname, description } = doc.data();
      events.push({
        key: doc.id,
        doc, // DocumentSnapshot
        time,
        eventname,
        description,
      });
    });
    this.setState({
      events
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
           <Card>
  <Card.Header>Please Accept by 9:30 AM</Card.Header>
  <Card.Body>
    <Card.Title>Events Today</Card.Title>
  </Card.Body>
</Card>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
            
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/evcreate" class="btn btn-success">Add Event</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Event</th>
                  <th>Puller Instructions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.map(event =>
                  <tr>
                    <td><Link to={`/evshow/${event.key}`}>{event.time}</Link></td>
                    <td>{event.eventname}</td>
                    <td>{event.description}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AppEvent;