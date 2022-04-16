import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmpolyee from "./components/AddEmpolyee";
import EmpolyeeList from "./components/EmpolyeeList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* i Want to show Navbar on every page */}
        <Navbar />
        <Routes>
          <Route index element={<EmpolyeeList />} />
          <Route path="/" element={<EmpolyeeList />} />
          <Route path="/employeeList" element={<EmpolyeeList />} />
          <Route path="/addEmployee" element={<AddEmpolyee />} />
          <Route paht="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
