import axios from "axios";

//Springboot Rest API URL that we have created.
const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employees";

class EmployeeService {
  //this method will save the employee details in DB.
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  // this method will fetch all the employees from DB
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
}

export default new EmployeeService();
