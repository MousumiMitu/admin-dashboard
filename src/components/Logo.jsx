import React from "react";
import "./Logo.css";

function Logo() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="/" className="logo d-flex align-items-center">
        <span className="d-none d-lg-block">Admin Dashboard</span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSidebar}
      ></i>
    </div>
  );
}

export default Logo;
