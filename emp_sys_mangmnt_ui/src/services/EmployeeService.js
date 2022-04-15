import axios from "axios";

//Springboot Rest API URL that we have created.
const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
}

export default new EmployeeService();
