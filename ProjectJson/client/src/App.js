import React, { Component } from "react";
import Login from "./login/Login";
import "./App.css";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./manageadmin/Header";
import ListMenu from "./manageadmin/ListMenu";
import callApi from "./utils/ApiCaller";
import { Redirect, router } from "react-router-dom";
class App extends Component {
  componentWillMount() {
    // var loggedUser=localStorage.getItem('user');
    // callApi('/login','POST',null).
  }
  render() {
    return (
      <Router>
        <div>
          <div className="container-fluid">
            <Header />
            <div className="row rt-2">
              <ListMenu />
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
      return <Switch>{result}</Switch>;
    }
  };
}

export default App;
