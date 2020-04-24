import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Card, Button, Jumbotron } from 'react-bootstrap';

class AdminPulls extends Component {
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
    <Card.Title text='dark'>Puller's Responses</Card.Title>
    <Card.Body></Card.Body>
    <Jumbotron>
    <Card.Title>Bob Vanderham - 10:00AM</Card.Title>
    <Card.Body></Card.Body>
    <Card.Subtitle>Justin Beiber - Paul Brown Stadium</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/justin-beiber/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Confirm</Button>
    {"  "}
    <Button variant="danger" size="sm" >Deny</Button>
    {" "}
    <Button variant="primary" size="sm" >Assign Different Event</Button>
    </Card.Text>
    </Jumbotron>
    <Card.Body></Card.Body>
    <Jumbotron>
    <Card.Title>Carson Poe - 11:00 AM</Card.Title>
    <Card.Body></Card.Body>
    <Card.Subtitle>Alanis Morissette - Paul Brown Stadium</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/alanis-morissette/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Confirm</Button>
    {"  "}
    <Button variant="danger" size="sm" >Deny</Button>
    {" "}
    <Button variant="primary" size="sm" >Assign Different Event</Button>
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
    <Button variant="success" size="sm" >Confirm</Button>
    {"  "}
    <Button variant="danger" size="sm" >Deny</Button>
    {" "}
    <Button variant="primary" size="sm" >Assign Different Event</Button>
    </Card.Text>
    </Jumbotron>
    <Card.Body></Card.Body>
    <Jumbotron>
    <Card.Title>Brian Reites - 12:00 PM</Card.Title>
    <Card.Body></Card.Body>
    <Card.Subtitle>Rolling Stones - Xfinity Center</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/justin-beiber/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Confirm</Button>
    {"  "}
    <Button variant="danger" size="sm" >Deny</Button>
    {" "}
    <Button variant="primary" size="sm" >Assign Different Event</Button>
    </Card.Text>
    </Jumbotron>
  <Card.Body></Card.Body>
  <Jumbotron>
  <Card.Title>Carson Poe - 1:00 PM</Card.Title>
    <Card.Body></Card.Body>
    <Card.Subtitle>BTS - Rose Bowl</Card.Subtitle>
    <Card.Text>
      https://www1.ticketmaster.com/bts/event/1600CA4D8075
    </Card.Text>
    <Card.Text> - Buy All Lowers </Card.Text>
    <Card.Text> - Buy All Full View Cheaps ($49.50) </Card.Text>
    <Card.Text> - Buy $70 full view clubs </Card.Text>
    <Card.Text> 
    <Button variant="success" size="sm" >Confirm</Button>
    {"  "}
    <Button variant="danger" size="sm" >Deny</Button>
    {" "}
    <Button variant="primary" size="sm" >Assign Different Event</Button>
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
    );
  }
}
AdminPulls.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminPulls);