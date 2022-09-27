import React from "react";
import { departements } from "../datas/Data";
import Header from "../components/layout/Header";

console.log(departements[0]);

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <p>test</p>
      </main>
    </div>
  );
};

export default Home;
