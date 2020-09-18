import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/form";
import Col from "react-bootstrap/col";
import Row from "react-bootstrap/row";
import getUserData from "../../services/users/userData";
import AssignRole from "./AssignRole";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    setUsers(getUserData);
  }, [setUsers]);

  const onSubmitAssignRole = (data) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <div>
        <div className="float-left">
          <h1>User List</h1>
        </div>
        <div className="float-right">
          <button className="btn btn-success mb-2" onClick={handleShowModal}>
            + Assign Role
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan="5" className="text-danger text-center">
                No data found
              </td>
            </tr>
          )}
          {users.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.role ? item.role : "-"}</td>
              <td>
                <button className="btn btn-success mr-2">Edit</button>
                <button className="btn btn-danger mr-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        animation={true}
        centered
      >
        <AssignRole submitData={onSubmitAssignRole} />
      </Modal>
    </React.Fragment>
  );
};

export default UserList;
