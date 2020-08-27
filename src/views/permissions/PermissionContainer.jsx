import React, { Component } from "react";

import UserList from "../../components/users/UserList";
import Sidebar from "../../components/partials/Sidebar";

const PermissionContainer = () => {
  return (
    <div className="dashboard mt-3">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9 mt-3">Permissions</div>
        </div>
      </div>
    </div>
  );
};

export default PermissionContainer;
