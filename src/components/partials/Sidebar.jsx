import React, { Component, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, withRouter } from "react-router-dom";

const Sidebar = (props) => {
  const [pathName, setpathName] = useState(props.history.location.pathname);

  return (
    <ListGroup>
      <ListGroup.Item className={pathName == "/users" ? "active" : ""}>
        <Link to="/users">Users</Link>
      </ListGroup.Item>
      <ListGroup.Item className={pathName == "/roles" ? "active" : ""}>
        <Link to="/roles">Roles</Link>
      </ListGroup.Item>
      <ListGroup.Item className={pathName == "/permissions" ? "active" : ""}>
        <Link to="/permissions">Permissions</Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default withRouter(Sidebar);
