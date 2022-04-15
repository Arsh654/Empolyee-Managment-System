package com.fullStack.Employee.entity;

import lombok.Data;

import javax.persistence.*;
//This class fields will directly gonna interact with the DB not the model class(UI interact)
@Data
@Entity
@Table(name = "employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}




