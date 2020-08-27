import React, { useEffect, useState } from "react";
import getUserData from "../../services/users/userData";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUserData);
  }, [setUsers]);

  return (
    <React.Fragment>
      <h2>User List</h2>

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
          {users.length == 0 && (
            <tr>
              <td colSpan="5" className="text-danger text-center">
                No data found
              </td>
            </tr>
          )}
          {users.map((item, index) => (
            <tr>
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
    </React.Fragment>
  );
};

export default UserList;
