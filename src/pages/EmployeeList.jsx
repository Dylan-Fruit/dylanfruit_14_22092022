import React from "react";
import Header from "../components/layout/Header";
import DataTable from "../components/DataTable";

const EmployeeList = () => {
  return (
    <div className="employee-list">
      <Header />
      <div className="main">
        <h1>Current Employees</h1>
        <DataTable />
      </div>
    </div>
  );
};

export default EmployeeList;
