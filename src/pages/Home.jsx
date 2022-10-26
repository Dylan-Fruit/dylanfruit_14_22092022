import React from "react";
import Header from "../components/layout/Header";
import CreateEmployeeForm from "../components/CreateEmployeeForm";

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
