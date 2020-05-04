import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Pulls from "./components/dashboard/Pulls";
import Purchases from "./components/dashboard/Purchases";
import Accounts from "./components/dashboard/Accounts";
import Training from "./components/dashboard/Training";
import AdminDashboard from './components/dashboard/AdminDashboard';
import AdminPulls from './components/dashboard/AdminPulls';
import AdminPurchases from './components/dashboard/AdminPurchases';
import AdminAccounts from './components/dashboard/AdminAccounts';
import AdminTraining from './components/dashboard/AdminTraining';
import AdminUsers from './components/dashboard/AdminUsers';
import PullerFeed from './components/dashboard/PullerFeed';
import Form from './components/dashboard/Form';
import Secform from './components/dashboard/Secform';
import Applayout from './components/Applayout';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

/*
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
*/
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/admindashboard" component={AdminDashboard} />
              <Route exact path="/secform" component={Secform} />
              <Route exact path="/adminpulls" component={AdminPulls} />
              <Route exact path="/adminpurchases" component={AdminPurchases} />
              <Route exact path="/adminaccounts" component={AdminAccounts} />
              <Route exact path="/admintraining" component={AdminTraining} />
              <Route exact path="/adminusers" component={AdminUsers} />
              <Route exact path="/pullerfeed" component={PullerFeed} />
              <Route exact path='/applayout' component={Applayout} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/create' component={Create} />
              <Route path='/show/:id' component={Show} />
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;