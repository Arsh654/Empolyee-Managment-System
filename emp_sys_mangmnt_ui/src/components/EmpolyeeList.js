import React from "react";

const EmpolyeeList = () => {
  return (
    <div className="container mx-auto my-6 ">
      {/* 1. Create a button For adding the New Entry for the employee */}
      <div className="h-12 m-2 mb-4">
        <button className="rounded bg-yellow-400 text-white font-semibold px-6 py-2">
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
          {/* body of the table. */}
          <tbody className="bg-white">
            <tr>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Arshad</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Ali</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Arshad@ali</div>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpolyeeList;
