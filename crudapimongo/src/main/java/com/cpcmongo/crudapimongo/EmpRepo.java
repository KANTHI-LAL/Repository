package com.cpcmongo.crudapimongo;
 

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cpcmongo.crudapimongo.Employee;

public interface EmpRepo extends MongoRepository<Employee, Integer>   {

}