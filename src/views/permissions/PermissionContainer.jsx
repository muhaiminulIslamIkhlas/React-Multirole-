import React, { Component } from "react";

import PermissionList from "../../components/permissions/PermissionList";
import Sidebar from "../../components/partials/Sidebar";

const PermissionContainer = () => {
  return (
    <div className="dashboard mt-3">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9 mt-3">
            <PermissionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionContainer;
