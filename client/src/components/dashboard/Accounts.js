import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Dropdown,DropdownButton,Card,Button,Table } from 'react-bootstrap';

class Accounts extends Component {
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
    <Card.Title>Accounts for Purchasing</Card.Title>
  </Card.Body>
</Card>
<Table responsive striped>
  <thead>
    <tr>
      <th>#</th>
      <th>Account</th>
      <th>Phone Number</th>
      <th>Card Type</th>
      <th>Card(Last 4)</th>
      <th>CV</th>
      <th>Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>sgrant31099@gmail.com</td>
      <td>(919) 984-7412</td>
      <td>AMEX</td>
      <td>0228</td>
      <td>913</td>
      <td>YES</td>
    </tr>
    <tr>
      <td>2</td>
      <td>ftaylor@gmail.com</td>
      <td>(336) 145-7456</td>
      <td>VISA</td>
      <td>1456</td>
      <td>841</td>
      <td>NO</td>
    </tr>
    <tr>
      <td>3</td>
      <td>carson.poe@yahoo.com</td>
      <td>(543) 245-5412</td>
      <td>MC</td>
      <td>8456</td>
      <td>456</td>
      <td>NO</td>
    </tr>
    <tr>
      <td>4</td>
      <td>hjd2314@etainement.com</td>
      <td>(541) 142-4785</td>
      <td>VISA</td>
      <td>7416</td>
      <td>147</td>
      <td>YES</td>
    </tr>
    <tr>
      <td>5</td>
      <td>iansmith@gmail.com</td>
      <td>(975) 632-4763</td>
      <td>VISA</td>
      <td>4531</td>
      <td>763</td>
      <td>NO</td>
    </tr>
    <tr>
      <td>6</td>
      <td>ticketpurchases@etainement.com</td>
      <td>(574) 421-9746</td>
      <td>AMEX</td>
      <td>3614</td>
      <td>846</td>
      <td>YES</td>
    </tr>
    <tr>
      <td>7</td>
      <td>tnorgan12@gmail.com</td>
      <td>(456) 478-6145</td>
      <td>AMEX</td>
      <td>4635</td>
      <td>212</td>
      <td>YES</td>
    </tr>
    <tr>
      <td>8</td>
      <td>alexreed12456@hotmail.com</td>
      <td>(847) 121-6532</td>
      <td>MC</td>
      <td>5763</td>
      <td>997</td>
      <td>NO</td>
    </tr>
    <tr>
      <td>9</td>
      <td>rogerscott124@yahoo.com</td>
      <td>(661) 489-7798</td>
      <td>VISA</td>
      <td>4464</td>
      <td>977</td>
      <td>YES</td>
    </tr>
    <tr>
      <td>10</td>
      <td>tracy.oaster@parlaykings.com</td>
      <td>(337) 663-4114</td>
      <td>AMEX</td>
      <td>2395</td>
      <td>421</td>
      <td>NO</td>
    </tr>
    <tr>
      <td>11</td>
      <td>joeexotic@carolebaskin.com</td>
      <td>(545) 743-5563</td>
      <td>MC</td>
      <td>6632</td>
      <td>878</td>
      <td>NO</td>
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
Accounts.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Accounts);
