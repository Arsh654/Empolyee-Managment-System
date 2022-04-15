package com.fullStack.Employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//This class is used to define the basic layout of the data fields
//that will gonna interact with the UI
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
