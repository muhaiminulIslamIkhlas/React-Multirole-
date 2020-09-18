import React, { useEffect, useState } from "react";
import getPermissionsMasterData from "../../services/permissions/permissionMasterData";

const PermissionList = () => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    setPermissions(getPermissionsMasterData);
  }, [setPermissions]);

  return (
    <React.Fragment>
      <h2>Permission List</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {permissions.length === 0 && (
            <tr>
              <td colSpan="5" className="text-danger text-center">
                No data found
              </td>
            </tr>
          )}
          {permissions.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
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

export default PermissionList;
