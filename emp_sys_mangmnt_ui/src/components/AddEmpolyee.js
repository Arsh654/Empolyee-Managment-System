import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmpolyee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  //used to handle the changes in the input fields.
  const handleChange = (e) => {
    const value = e.target.value;
    //console.log(value);
    setEmployee({ ...employee, [e.target.name]: value });
  };

  //will save the employee details to the database.
  const saveEmployee = (e) => {
    e.preventDefault();
    //console.log(employee);
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        //navigate to the list of employees page.
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //will reset the form.
  const resetForm = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow my-6 bg-slate-400 border-2 border-gray-300 rounded-lg">
      <div className="px-8 py-8 ">
        {/* 1. adding a simple card as a header named as "Add New Employee" */}
        <div className="font-thick text-3xl tracking-wide">
          <h1>Add New Employee</h1>
        </div>
        {/* 2. Add form to submit the empolyee details FirstName, LastName, Emaail and then submit button */}
        {/* First Name logic */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-black text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 mt-1 px-2 py-2 border-2 border-gray-300 rounded-lg"
          ></input>
        </div>
        {/* Last Name logic */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-black text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 mt-1 px-2 py-2 border-2 border-gray-300 rounded-lg"
          ></input>
        </div>
        {/*  Email logic */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-black text-sm font-normal">
            Email Id
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 mt-1 px-2 py-2 border-2 border-gray-300 rounded-lg "
          ></input>
        </div>
        {/* 3. Add Save and Clear button */}
        <div className="items-center justify-center h-14 w-full my-4 space-x-9 pt-6">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-yellow-400 hover:bg-yellow-900 py-2 px-6"
          >
            {/* wheneve we gonna click this button (save) will trigger the saveEmployee method
            which then make an http req vai Axios to our backend and will save the employee details in DB. */}
            Save
          </button>
          <button
            onClick={resetForm}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-900 py-2 px-6"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmpolyee;
