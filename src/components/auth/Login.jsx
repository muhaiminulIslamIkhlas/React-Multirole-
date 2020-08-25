import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { checkLogin } from "../../services/auth/LoginService";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: "",
  };

  componentDidMount() {
    const getUserData =
      JSON.parse(localStorage.getItem("userData")) || undefined;
    if (typeof getUserData != "undefined") {
      if (getUserData.username && getUserData.username.length > 0) {
        this.props.history.push("/users");
      }
    }
  }

  changeUsername = (e) => {
    const username = e.target.value;
    this.setState({ username });
  };

  changePassword = (e) => {
    const password = e.target.value;
    this.setState({ password });
  };

  submitLogin = (e) => {
    if (checkLogin(this.state)) {
      this.setState({ errorMessage: "" });
      localStorage.setItem("userData", JSON.stringify(this.state));
      this.props.history.push("/users");
    } else {
      this.setState({ errorMessage: "Sorry invalid username or password" });
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center login-area">
        <Card style={{ width: "30rem" }}>
          <h3 className="text-uppercase">Login</h3>
          <hr />

          {this.state.errorMessage.length > 0 && (
            <Alert variant="danger">{this.state.errorMessage}</Alert>
          )}

          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.username}
                  placeholder="Enter username"
                  onChange={this.changeUsername}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  type="password"
                  placeholder="Password"
                  onChange={this.changePassword}
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  onClick={this.submitLogin}
                  variant="primary"
                  type="button"
                  className="btn btn-block"
                >
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(Login);
