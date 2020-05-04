import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class EventEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      time: '',
      eventname: '',
      description: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('events').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const event = doc.data();
        this.setState({
          key: doc.id,
          title: event.time,
          eventname: event.eventname,
          description: event.description
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({event:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { time, eventname, description } = this.state;

    const updateRef = firebase.firestore().collection('events').doc(this.state.key);
    updateRef.set({
      time,
      eventname,
      description
    }).then((docRef) => {
      this.setState({
        key: '',
        time: '',
        eventname: '',
        description: ''
      });
      this.props.history.push("/evshow/"+this.props.match.params.id)
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
    <Card.Title>Events Today</Card.Title>
  </Card.Body>
</Card>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Event
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/evshow/${this.state.key}`} class="btn btn-primary">Event List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="time">Time:</label>
                <input type="text" class="form-control" name="time" value={this.state.time} onChange={this.onChange} placeholder="Time" />
              </div>
              <div class="form-group">
                <label for="eventname">Event:</label>
                <input type="text" class="form-control" name="eventname" value={this.state.eventname} onChange={this.onChange} placeholder="Event" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Puller Instructions" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EventEdit;