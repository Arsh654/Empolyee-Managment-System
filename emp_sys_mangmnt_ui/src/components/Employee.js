import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  //defining employee object as we need to pass it through the props. {props} is passed as a parameter and inside
  //the {} we can define the props.
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm font-medium">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-blue-300 hover:text-blue-700 px-4 hover:cursor-pointer "
        >
          Edit
        </a>
        <a
          // i need to implement the delete functionality. sucj that the data against the id will be deleted.
          //and it'll be reflected in the DB and in the employee list component as well.
          //so to implement this i need to impelemen the logic of deletion not here(Child component) but in the parent component.
          //Parent is EmployeeList Component and i'll pass this method to child(Employee) component via props.
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-blue-300 hover:text-blue-700 px-4 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
