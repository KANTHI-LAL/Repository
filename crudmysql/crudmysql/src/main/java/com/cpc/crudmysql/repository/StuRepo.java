package com.cpc.crudmysql.repository;

import org.springframework.data.repository.CrudRepository;

import com.cpc.crudmysql.model.Student;

public interface StuRepo extends CrudRepository<Student, Integer>{

}
