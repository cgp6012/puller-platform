import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class EventCreate extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('events');
    this.state = {
      time: '',
      eventname: '',
      description: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { time, eventname, description } = this.state;

    this.ref.add({
      time,
      eventname,
      description
    }).then((docRef) => {
      this.setState({
        time: '',
        eventname: '',
        description: ''
      });
      this.props.history.push("/appevent")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { time, eventname, description } = this.state;
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
              ADD Event
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/appevent" class="btn btn-primary">Event List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="time">Time:</label>
                <input type="text" class="form-control" name="time" value={time} onChange={this.onChange} placeholder="Time" />
              </div>
              <div class="form-group">
                <label for="eventname">Event:</label>
                <input type="text" class="form-control" name="eventname" value={eventname} onChange={this.onChange} placeholder="Event" />
              </div>
              <div class="form-group">
                <label for="description">Puller Instructions:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Puller Instructions" cols="80" rows="3">{description}</textArea>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCreate;