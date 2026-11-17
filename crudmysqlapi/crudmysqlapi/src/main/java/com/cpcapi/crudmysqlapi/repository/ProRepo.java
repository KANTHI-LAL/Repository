package com.cpcapi.crudmysqlapi.repository;

import org.springframework.data.repository.CrudRepository;

import com.cpcapi.crudmysqlapi.model.Product;

public interface ProRepo extends CrudRepository<Product, Integer>{

}
