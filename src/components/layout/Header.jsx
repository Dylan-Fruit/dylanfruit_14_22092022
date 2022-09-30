import React from "react";
import { NavLink } from "react-router-dom";
import logobg from "../../assets/image/logobg.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-nav">
        <img src={logobg} alt="logo of Wealth Health" />
        <NavLink to="/employee-list">
          <p className="btn">View current employees</p>
        </NavLink>
        <NavLink to="/">
          <p className="btn">Create employee</p>
        </NavLink>
      </div>
      <h1>HRnet</h1>
    </header>
  );
};

export default Header;
