import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Card, Button } from 'react-bootstrap';

class Training extends Component {
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
    <Card.Title>Frequently Asked Questions</Card.Title>
  </Card.Body>
</Card>
<Card>
    <Card.Body>
        <Card.Subtitle>How do I see the ticket limit on an event?</Card.Subtitle>
        <Card.Text></Card.Text>
        <Card.Text> - On the ticketmaster event page you will click "More Info"</Card.Text>
    </Card.Body>
    <Card.Body>
        <Card.Subtitle>Can I sign into the same account twice for an event?</Card.Subtitle>
        <Card.Text></Card.Text>
        <Card.Text> - No, that is not allowed </Card.Text>
    </Card.Body>
    <Card.Body>
        <Card.Subtitle>How do I know what kind of tickets I have carted?</Card.Subtitle>
        <Card.Text></Card.Text>
        <Card.Text> - In the purchases screen, you can click "Details" that should share that information that you need to see what kind of tickets you have carted </Card.Text>
    </Card.Body>
    <Card.Body>
        <Card.Subtitle>How do I know if these are "resale tickets"?</Card.Subtitle>
        <Card.Text></Card.Text>
        <Card.Text> - Resale show as pink dots on the map. Also, "Resale" will be displayed in the checkout screen </Card.Text>
    </Card.Body>
</Card>
<Card>
    <Card.Body>
    <Card.Title> Tutorial Training Videos</Card.Title>
    </Card.Body>
</Card>
<Card>
    <Card.Body></Card.Body>
    <Card.Subtitle>Insomniac Tutorial</Card.Subtitle>
    <Card.Body></Card.Body>
    <Card.Subtitle> TicketMaster Join Waiting Rooms Tutorial</Card.Subtitle>
    <Card.Body></Card.Body>
    <Card.Subtitle>Ticketmaster Pulling & Checkout Tutorial (Part 1)</Card.Subtitle>
    <Card.Body></Card.Body>
    <Card.Subtitle>Ticketmaster Pulling & Checkout Tutorial (Part 2)</Card.Subtitle>
    <Card.Body></Card.Body>
    <Card.Subtitle>Ticketmaster Pulling & Checkout Tutorial (Part 3)</Card.Subtitle>
    <Card.Body></Card.Body>
    <Card.Subtitle>Ticketmaster Pulling & Checkout Tutorial (Part 4)</Card.Subtitle>
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
Training.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Training);