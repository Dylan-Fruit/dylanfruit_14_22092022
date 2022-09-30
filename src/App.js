import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
