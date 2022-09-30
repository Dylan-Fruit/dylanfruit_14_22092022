function SaveEmployee(e, employeesFromData, employees, setEmployees) {
  e.preventDefault();

  const newEmployees = [...employees, employeesFromData];
  setEmployees(newEmployees);
  document.querySelector(".create-employee-form").reset();
}

export default SaveEmployee;
