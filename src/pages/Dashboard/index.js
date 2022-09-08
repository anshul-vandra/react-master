import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Dashboard </h2>

      <br />

      <h4 style={{ textAlign: "center" }}>
        <Link to="/my-account">My Account</Link>
      </h4>

      <h4 style={{ textAlign: "center" }}>
        <Link to="/image-upload">Image Upload</Link>
      </h4>
    </>
  );
};

export default Dashboard;
