import React, { useEffect, useState } from "react";
import getUserData from "../../services/users/userData";
import getRolePermissionData from "../../services/roles/rolePermissionData";

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    setRoles(getRolePermissionData);
  }, [setRoles]);

  return (
    <React.Fragment>
      <h2>Role List</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Permissions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {roles.length === 0 && (
            <tr>
              <td colSpan="5" className="text-danger text-center">
                No data found
              </td>
            </tr>
          )}
          {roles.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                {item.permissions.map((permission, index) => (
                  <span className="badge badge-default" key="index2">
                    {permission.name}
                  </span>
                ))}
              </td>
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

export default RoleList;
