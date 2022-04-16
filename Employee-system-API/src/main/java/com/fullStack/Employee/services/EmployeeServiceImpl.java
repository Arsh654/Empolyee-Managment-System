package com.fullStack.Employee.services;

import com.fullStack.Employee.entity.EmployeeEntity;
import com.fullStack.Employee.model.Employee;
import com.fullStack.Employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee createEmployee(Employee employee) {
        //employee is the one which interacts with tht UI
        //need to convert it to the employeeEntity to store it in the DB via Java.

        EmployeeEntity employeeEntity = new EmployeeEntity();
        //copy the data from employee to employeeEntity.
        BeanUtils.copyProperties(employee,employeeEntity);
        //save method is written already and JPArepo that we have extended is providing this method to us...Inbuilt in JPAREpo
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
       List<EmployeeEntity> employeeEntities =
               employeeRepository.findAll();
       //findAll() method gives us the List..

       //need to convert this employee entity object to only employee
        //in order to make it interact with the frontend
        List<Employee> employees = employeeEntities
                .stream()
                .map(emp -> new Employee(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmailId()))
                .collect(Collectors.toList());

        return employees;

    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById((id)).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
       EmployeeEntity employeeEntity =
               employeeRepository.findById(id).get();

       //need to convert this employee entity to employee for UI
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity,employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
       EmployeeEntity employeeEntity =
               employeeRepository.findById(id).get();

       employeeEntity.setEmailId(employee.getEmailId());
       employeeEntity.setFirstName(employee.getFirstName());
       employeeEntity.setLastName(employee.getLastName());

       employeeRepository.save(employeeEntity);
       return employee;
    }
}
