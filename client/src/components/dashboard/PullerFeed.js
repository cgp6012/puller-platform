import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Dropdown,DropdownButton,Card,Button,Table, InputGroup,FormControl,Form } from 'react-bootstrap';

class PullerFeed extends Component {
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
    <Card.Title>Puller Live Feed</Card.Title>
    <Form inline>
      <FormControl type="text" placeholder="Search by Event or Venue" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Card.Body>
</Card>
<Table responsive striped>
  <thead>
    <tr>
      <th>#</th>
      <th>User</th>
      <th>Event</th>
      <th>Venue</th>
      <th>Section</th>
      <th>Row</th>
      <th>Seats</th>
      <th>Total $</th>
      <th>Action</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Brian Reites</td>
      <td>Harry Styles</td>
      <td>PNC Arena</td>
      <td>225</td>
      <td>B</td>
      <td>1-2</td>
      <td>$146.18</td>
      <td>
      <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
      </td>
      <td>Wrong side of the break.. passing on these</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Alec Robinson</td>
      <td>Harry Styles</td>
      <td>PNC Arena</td>
      <td>103</td>
      <td>F</td>
      <td>3-4</td>
      <td>$206.25</td>
      <td>
      <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
      </td>
      <td>Want to buy any lower level inventory on the first ten rows</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bob Vanderham</td>
      <td>Harry Styles</td>
      <td>PNC Arena</td>
      <td>223</td>
      <td>C</td>
      <td>1-2</td>
      <td>$146.18</td>
      <td>
      <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
      </td>
      <td>Want first 3 rows for sections 220/223</td>
    </tr>
    <tr>
    <td>4</td>
      <td>Brian Reites</td>
      <td>Harry Styles</td>
      <td>PNC Arena</td>
      <td>337</td>
      <td>A</td>
      <td>1-2</td>
      <td>$101.48</td>
      <td>
      <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
      </td>
      <td>Pass... don't want any inventory for the 300 level</td>
    </tr>
    <tr>
    <td>5</td>
      <td>Brian Reites</td>
      <td>Harry Styles</td>
      <td>PNC Arena</td>
      <td>225</td>
      <td>B</td>
      <td>3-4</td>
      <td>$146.18</td>
      <td><Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button></td>
      <td>Wrong side of the break.. passing on these</td>
    </tr>
    <tr>
    <td>6</td>
      <td>Carson Poe</td>
      <td>Harry Styles</td>
      <td>PNC Arena</td>
      <td>226</td>
      <td>E</td>
      <td>5-8</td>
      <td>$218.16</td>
      <td><Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button></td>
      <td>Wrong side of the break</td>
    </tr>
    <tr>
    <td>7</td>
      <td>Bob Vanderham</td>
      <td>Harry Styles</td>
      <td>PNC Arena</td>
      <td>304</td>
      <td>R</td>
      <td>10-14</td>
      <td>$312.01</td>
      <td>
      <Button variant="success" size="sm" >Accept</Button>
    {"  "}
    <Button variant="danger" size="sm" >Pass</Button>
      </td>
      <td>Pass... don't want any inventory for the 300 level</td>
    </tr>
  </tbody>
</Table>
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
PullerFeed.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(PullerFeed);