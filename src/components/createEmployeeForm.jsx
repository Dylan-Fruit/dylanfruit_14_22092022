import React, { useState } from "react";
import { useGlobalState } from "../utils/State";
import { statesName } from "../datas/Data";

const createEmployeeForm = () => {
  const [employees, setEmployees] = useGlobalState("employee");
  const [employeesFromData, setEmployeesFromData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  return <form className="create-employee-form"></form>;
};

export default createEmployeeForm;
