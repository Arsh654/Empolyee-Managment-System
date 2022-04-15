import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmpolyeeList = () => {
  const navigate = useNavigate();

  // Need to get the list of employees from the database onlu when the component is mounted i..e loades properly
  //to track it loading we are useing one state variable loading....will set the value to true when the data is loading and
  //when we completes the laoding we will set the value to false.
  const [loading, setLoading] = useState(true);
  //to store the list of employees when we successfully fetch the data from the database.
  const [employees, setEmployees] = useState(null);

  //we'll use useEffect to fetch the data from the database only when the component is mounted.
  useEffect(() => {
    //function to fetch the data from the database.
    const fetchData = async () => {
      //first set Loading to true to show the loading spinner or to make sure that page has not been refreshed when it gets loaded.
      setLoading(true);
      try {
        //need to call the getEmployees() method from the EmployeeService class for getting the list of employees.
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Something mess up with your backend");
        console.log(error);
      }
      //after fetching the data from the database we'll set the loading to false to hide the loading spinner.
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-6 ">
      {/* 1. Create a button For adding the New Entry for the employee */}
      <div className="h-12 m-2 mb-4">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-yellow-400 text-white font-semibold px-6 py-2"
        >
          Add Employee
        </button>
      </div>
      {/* 2. Create a table to show the list of employees */}
      <div className="flex shadow border-b">
        <table className="min-w-full">
          {/* head of the table */}
          <thead className="bg-slate-400">
            <tr>
              <th className="text-left font-thick text-slate-800 uppercase tracking-wider px-6 py-2">
                First Name
              </th>
              <th className="text-left font-thick text-slate-800 uppercase tracking-wider px-6 py-2">
                Last Name
              </th>
              <th className="text-left font-thick text-slate-800 uppercase tracking-wider px-6 py-2">
                Email Id
              </th>
              <th className="text-right font-thick text-slate-800 uppercase tracking-wider px-6 py-2">
                Action
              </th>
            </tr>
          </thead>
          {/* can only loop in once loading is completed */}
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee employee={employee}></Employee>
                // above condition is the props condition.
                //since employess is an array of objects we need to pass the employee object to the Employee component.
                //Employee is the child component of EmpolyeeList. so we define the property as employee. in the <Employee> tag as
                //<Employee employee={employee}></Employee>....here employee={employee} is the props.
                //we need to define the props in the child component as well.
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmpolyeeList;
