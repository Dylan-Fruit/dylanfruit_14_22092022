import Header from "../components/layout/Header";
import { Modal, UseModal } from "df_reactmodalp14";
import CreateEmployeeForm from "../components/CreateEmployeeForm";

function Home() {
  const { isShowing, toggle } = UseModal();
  return (
    <div className="home">
      <Header />
      <main className="main">
        <h1>Create Employee</h1>
        <CreateEmployeeForm toggle={toggle} />
        <Modal isShowing={isShowing} hide={toggle} text="Employee Created !" />
      </main>
    </div>
  );
}

export default Home;
