import React from "react";
import EukaDataTables from "euka-datatables";
import { useGlobalState } from "../utils/State";

export default function DataTable() {
  const [employees] = useGlobalState("employee");
  console.log(employees);

  let columns = [
    {
      name: "firstName",
      label: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
    },
    {
      name: "startDate",
      label: "Start Date",
    },
    {
      name: "department",
      label: "Department",
    },
    {
      name: "dateOfBirth",
      label: "Date Of Birth",
    },
    {
      name: "street",
      label: "Street",
    },
    {
      name: "city",
      label: "City",
    },
    {
      name: "state",
      label: "State",
    },
    {
      name: "zipCode",
      label: "Zip Code",
    },
  ];

  let options = {
    responsive: "collapse",
    recordsPerPageOptions: { 10: 10, 25: 25, 50: 50, 100: 100 },
  };

  return (
    <div className="employee-list-data-table">
      <EukaDataTables
        key={"table-1"}
        columns={columns}
        data={employees}
        options={options}
      />
    </div>
  );
}
