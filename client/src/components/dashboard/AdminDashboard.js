import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Card, Button, Jumbotron } from 'react-bootstrap';

class AdminDashboard extends Component {
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
    <Card.Title text='dark'>Pulls Today</Card.Title>
    <div class='float-left'>
    <Button variant='success' size='sm'>Add Event</Button>
    </div>
    <Card.Body></Card.Body>
    <Card.Body></Card.Body>
    <Jumbotron>
    <Card.Title>10:00 AM</Card.Title>
    <Card.Body></Card.Body>
    <Card.Subtitle>Justin Beiber - Paul Brown Stadium</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/justin-beiber/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
    </Card.Text>
    </Jumbotron>
    <Card.Body></Card.Body>
    <Jumbotron>
    <Card.Title>11:00 AM</Card.Title>
    <Card.Body></Card.Body>
    <Card.Subtitle>Alanis Morissette - Paul Brown Stadium</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/alanis-morissette/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
    </Card.Text>
    <Card.Body></Card.Body>
    <Card.Subtitle>BTS - Rose Bowl</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/bts/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
    </Card.Text>
    </Jumbotron>
    <Card.Body></Card.Body>
    <Jumbotron>
    <Card.Title>12:00 PM</Card.Title>
    <Card.Body></Card.Body>
    <Card.Subtitle>Rolling Stones - Xfinity Center</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/justin-beiber/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
    </Card.Text>
    </Jumbotron>
  <Card.Body></Card.Body>
  <Jumbotron>
  <Card.Title>1:00 PM</Card.Title>
    <Card.Body></Card.Body>
    <Card.Subtitle>BTS - Rose Bowl</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/bts/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Edit</Button>
    {"  "}
    <Button variant="danger" size="sm" >Delete</Button>
    </Card.Text>
    </Jumbotron>
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
  /*<div>
    <div>
  <Card>
  <Card.Header>Please Accept by 9:30 AM</Card.Header>
  {
  <Card.Body>
    <Card.Title>Pulls Today</Card.Title>
    <Card.Text></Card.Text>
    <Card.Subtitle>10:00 AM | 11:00 AM | 12:00 PM | 1:00 PM</Card.Subtitle>
    <Card.Text></Card.Text>
    <Card.Text>Please accept by 9:30 AM</Card.Text>
    <Button variant="primary" >YES</Button>
    {"  "}
    <Button variant="primary" >NO</Button>
  </Card.Body> }
</Card>
</div>
   { <Button
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </Button>
   }
      </div> */
    );
  }
}
AdminDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminDashboard);