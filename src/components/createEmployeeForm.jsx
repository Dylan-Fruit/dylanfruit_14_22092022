import React, { useState } from "react";
import { useGlobalState } from "../utils/State";
import { states, statesName, departements } from "../datas/Data";
import SelectOptions from "../utils/SelectOptions";
import HandleChange from "../utils/HandleChange";
import SaveEmployees from "../utils/SaveEmployees";
import HandleChangeOption from "../utils/HandleChangeOption";
import Modal from "./Modal";

const CreateEmployeeForm = ({ toggle }) => {
  const [employees, setEmployees] = useGlobalState("employee");
  const [modaleOpened, setModaleOpened] = useState(false);
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

  const form = document.querySelector("form");

  const onClick = (e) => {
    e.preventDefault();
    setModaleOpened(true);
    form.reset();
  };

  return (
    <form
      className="create-employee-form"
      onSubmit={(e) =>
        SaveEmployees(e, employeesFromData, employees, setEmployees)
      }
    >
      {modaleOpened ? <Modal setModaleOpened={setModaleOpened} /> : ""}
      <div className="create-employee-form-both-side">
        <div className="create-employee-form-left-side">
          <div className="create-employee-form-left-side-firstName">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              onChange={(event) =>
                HandleChange(event, setEmployeesFromData, employeesFromData)
              }
            />
          </div>
          <div className="create-employee-form-left-side-lastName">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              onChange={(event) =>
                HandleChange(event, setEmployeesFromData, employeesFromData)
              }
            />
          </div>
          <div className="create-employee-form-left-side-birthdate">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input
              type="date"
              id="date-of-birth"
              placeholder="jj/mm/aaaa"
              name="date-of-birth"
              onChange={(event) =>
                HandleChange(event, setEmployeesFromData, employeesFromData)
              }
            />
          </div>
          <div className="create-employee-form-left-side-startDate">
            <label htmlFor="start-date">Start Date</label>
            <input
              type="date"
              id="start-date"
              placeholder="jj/mm/aaaa"
              name="start-date"
              onChange={(event) =>
                HandleChange(event, setEmployeesFromData, employeesFromData)
              }
            />
          </div>
          <div className="create-employee-form-left-side-department">
            <label htmlFor="department">Department</label>
            <select
              name="department"
              id="department"
              defaultValue={departements[0]}
              onChange={(event) =>
                HandleChangeOption(
                  event,
                  setEmployeesFromData,
                  employeesFromData
                )
              }
            >
              <SelectOptions options={departements} title="departments" />
            </select>
          </div>
        </div>
        <div className="create-employee-form-right-side">
          <h3>Address</h3>
          <div className="create-employee-form-right-side-street">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              onChange={(event) =>
                HandleChange(event, setEmployeesFromData, employeesFromData)
              }
            />
          </div>
          <div className="create-employee-form-right-side-city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={(event) =>
                HandleChange(event, setEmployeesFromData, employeesFromData)
              }
            />
          </div>
          <div className="create-employee-form-right-side-state">
            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              defaultValue={statesName[0]}
              onChange={(event) =>
                HandleChangeOption(
                  event,
                  setEmployeesFromData,
                  employeesFromData
                )
              }
            >
              <SelectOptions options={states} title="state" />
            </select>
          </div>
          <div className="create-employee-form-right-side-zipcode">
            <label htmlFor="zipcode">Zip Code</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              onChange={(event) =>
                HandleChange(event, setEmployeesFromData, employeesFromData)
              }
            />
          </div>
        </div>
      </div>
      <button className="saveBtn" type="submit" onClick={(e) => onClick(e)}>
        Save
      </button>
    </form>
  );
};

export default CreateEmployeeForm;
