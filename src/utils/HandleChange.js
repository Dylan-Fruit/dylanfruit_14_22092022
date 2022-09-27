function HandleChange(e, setEmployeesFromData, employeesFromData) {
  const { value, name } = e.currentTarget;
  setEmployeesFromData({
    ...employeesFromData,
    [name]: value,
  });
}

export default HandleChange;
