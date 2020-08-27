import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/images/logo.svg";
import "./assets/css/global.css";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserContainer from "./views/users/UserContainer";
import Header from "./components/partials/Header";
import PermissionContainer from "./views/permissions/PermissionContainer";
import RoleContainer from "./views/roles/RoleContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/users">
              <UserContainer />
            </Route>
            <Route path="/roles">
              <RoleContainer />
            </Route>
            <Route path="/permissions">
              <PermissionContainer />
            </Route>
            {/* <Route path="/dashboard">
            <Users />
          </Route> */}
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
