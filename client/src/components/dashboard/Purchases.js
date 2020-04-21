import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Purchases extends Component {
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
    <Card.Title></Card.Title>
    <Card.Title>Track Purchases By Account</Card.Title>
    <DropdownButton id="dropdown-basic-button" title="Date Range">
  <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
  <Dropdown.Item href="#/action-2">This Month</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Last 7 Days</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Custom Range</Dropdown.Item>
</DropdownButton>
  </Card.Body>
</Card>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Account</th>
      <th>Quantity Purchased</th>
      <th>Amount Purchased</th>
      <th>Payout</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>sgrant31099@gmail.com</td>
      <td>12</td>
      <td>$400</td>
      <td>$40</td>
    </tr>
    <tr>
      <td>2</td>
      <td>ftaylor@gmail.com</td>
      <td>51</td>
      <td>$325</td>
      <td>$14</td>
    </tr>
    <tr>
      <td>3</td>
      <td>carson.poe@yahoo.com</td>
      <td>24</td>
      <td>$240</td>
      <td>$31</td>
    </tr>
    <tr>
      <td>4</td>
      <td>hjd2314@etainement.com</td>
      <td>10</td>
      <td>$214</td>
      <td>$8</td>
    </tr>
    <tr>
      <td>5</td>
      <td>iansmith@gmail.com</td>
      <td>94</td>
      <td>$741</td>
      <td>$215</td>
    </tr>
    <tr>
      <td>6</td>
      <td>ticketpurchases@etainement.com</td>
      <td>212</td>
      <td>$2,457</td>
      <td>$351</td>
    </tr>
    <tr>
      <td>7</td>
      <td>tnorgan12@gmail.com</td>
      <td>212</td>
      <td>$1,451</td>
      <td>$400</td>
    </tr>
    <tr>
      <td>8</td>
      <td>alexreed12456@hotmail.com</td>
      <td>101</td>
      <td>$741</td>
      <td>$154</td>
    </tr>
    <tr>
      <td>9</td>
      <td>rogerscott124@yahoo.com</td>
      <td>51</td>
      <td>$612</td>
      <td>$97</td>
    </tr>
    <tr>
      <td>10</td>
      <td>tracy.oaster@parlaykings.com</td>
      <td>24</td>
      <td>$218</td>
      <td>$31</td>
    </tr>
    <tr>
      <td>11</td>
      <td>joeexotic@carolebaskin.com</td>
      <td>112</td>
      <td>$103</td>
      <td>$11</td>
    </tr>
    <tr>
      <td>12</td>
      <td>tigerking12@aol.com</td>
      <td>69</td>
      <td>$740</td>
      <td>$300</td>
    </tr>
    <tr>
      <td>13</td>
      <td>gary.trace@gmail.com</td>
      <td>31</td>
      <td>$350</td>
      <td>$64</td>
    </tr>
    <tr>
      <td>14</td>
      <td>cgp6012@gmail.com</td>
      <td>18</td>
      <td>$311</td>
      <td>$35</td>
    </tr>
    <tr>
      <td>15</td>
      <td>brianbooth@bettheboard.com</td>
      <td>79</td>
      <td>$812</td>
      <td>$147</td>
    </tr>
    <tr>
      <td>16</td>
      <td>jmook@hotmail.com</td>
      <td>31</td>
      <td>$412</td>
      <td>$74</td>
    </tr>
    <tr>
      <td>17</td>
      <td>alec.r@gmail.com</td>
      <td>26</td>
      <td>$521</td>
      <td>$100</td>
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
Purchases.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Purchases);