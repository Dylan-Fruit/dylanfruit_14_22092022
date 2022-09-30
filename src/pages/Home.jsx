import React from "react";
import { departements } from "../datas/Data";
import Header from "../components/layout/Header";
import CreateEmployeeForm from "../components/CreateEmployeeForm";

console.log(departements[0]);

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main">
        <h1>Create Employee</h1>
        <CreateEmployeeForm />
      </main>
    </div>
  );
};

export default Home;
