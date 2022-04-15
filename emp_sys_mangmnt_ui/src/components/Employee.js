import React from "react";

const Employee = ({ employee }) => {
  //defining employee object as we need to pass it through the props. {props} is passed as a parameter and inside
  //the {} we can define the props.
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
        <a href="#" className="text-blue-300 hover:text-blue-700 px-4 ">
          Edit
        </a>
        <a href="#" className="text-blue-300 hover:text-blue-700 px-4 ">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
