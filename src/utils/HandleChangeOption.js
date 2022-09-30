function HandleChangeOption(e, setEmployeesFromData, employeesFromData) {
  const idChoice = e.currentTarget.selectedIndex;

  const idText = {
    name: e.target.id,
    value: e.currentTarget.options[idChoice].text,
  };

  const [value, name] = idText;

  setEmployeesFromData({
    ...employeesFromData,
    [name]: value,
  });
}

export default HandleChangeOption;
