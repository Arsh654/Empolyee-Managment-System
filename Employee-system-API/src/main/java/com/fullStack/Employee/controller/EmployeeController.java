package com.fullStack.Employee.controller;

import com.fullStack.Employee.model.Employee;
import com.fullStack.Employee.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/employees")
    public Employee createEmployee( @RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    //Endpoint for getting all the details about the employee
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    //Delete API by ID.
    //will use ResponseEntity To get the whole http response
    //and print it according to our need.

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
        boolean deletedFlag = false;
        deletedFlag = employeeService.deleteEmployee(id);
        //at this moment we got the response back from the service layer.
        //make a Hashmap of say resposen and store the K,V pair to it.
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deletedFlag);
        //return response bundled with the Hashmap in ResponseEntity.
        return ResponseEntity.ok(response);
    }

    //RESTAPI to fetch the Employee bases in it's id.

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = null;
        employee = employeeService.getEmployeeById(id);

        return ResponseEntity.ok(employee);
    }

    //update the employee

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){

        employee = employeeService.updateEmployee(id,employee);

        return ResponseEntity.ok(employee);
    }
}
