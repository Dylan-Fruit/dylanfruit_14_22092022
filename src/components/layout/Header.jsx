import React from "react";
import logobg from "../../assets/image/logobg.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-nav">
        <img src={logobg} alt="logo of Wealth Health" />
        <p>View current employees</p>
      </div>
      <h1>HRnet</h1>
    </header>
  );
};

export default Header;
