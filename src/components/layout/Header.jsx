import React from "react";
import { NavLink } from "react-router-dom";
import logobg from "../../assets/image/logobg.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <header className="header">
      <div className="header-logo-nav">
        <img src={logobg} alt="logo of Wealth Health" />
        <NavLink to="/employee-list">
          <p
            id="btn"
            className={splitLocation[1] === "employee-list" ? "isActive" : ""}
          >
            View current employees
          </p>
        </NavLink>
        <NavLink to="/">
          <p id="btn" className={splitLocation[1] === "" ? "isActive" : ""}>
            Create employee
          </p>
        </NavLink>
      </div>
      <h1>HRnet</h1>
    </header>
  );
};

export default Header;
