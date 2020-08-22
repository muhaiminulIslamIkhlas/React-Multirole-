import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Form from "react-bootstrap/Form";
class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  changeUsername = (e) => {
    const username = e.target.value;
    this.setState({ username });
  };

  render() {
    return (
      <div className="d-flex justify-content-center login-area">
        <Card style={{ width: "30rem" }}>
          <h3 className="text-uppercase">Login</h3>
          <hr />
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={this.changeUsername}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
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

export default Login;
