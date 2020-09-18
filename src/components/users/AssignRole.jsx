import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/form";
import Col from "react-bootstrap/col";
import Row from "react-bootstrap/row";
import getUserData from "../../services/users/userData";
import getRoleMasterData from "../../services/roles/roleMasterData";

const AssignRole = (props) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const changeUser = (e) => {
    setUser(e.target.value);
  };
  const changeRole = (e) => {
    setRole(e.target.value);
  };

  useEffect(() => {
    setUsers(getUserData);
    setRoles(getRoleMasterData);
  }, []);

  const submitRole = () => {
    const userData = JSON.parse(user);
    const roleData = JSON.parse(role);

    let data = {
      id: 1000,
      userName: userData.username,
      name: userData.name,
      password: userData.password,
      role: roleData.name,
    };
    props.submitData(data);
  };

  return (
    <React.Fragment>
      <Modal.Header closeButton>
        <Modal.Title>Assign Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Email
            </Form.Label>
            <Col sm="6">
              <select
                className="form-control"
                value={user}
                onChange={changeUser}
                required
              >
                <option value="">Please Select a user</option>
                {users.map((item, index) => (
                  <option value={JSON.stringify(item)} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4">
              Select Role
            </Form.Label>
            <Col sm="6">
              <select
                className="form-control"
                value={role}
                onChange={changeRole}
                required
              >
                <option value="">Please Select a role</option>
                {roles.map((item, index) => (
                  <option value={JSON.stringify(item)} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={submitRole} className="btn btn-success">
          Save
        </button>
      </Modal.Footer>
    </React.Fragment>
  );
};

export default AssignRole;
