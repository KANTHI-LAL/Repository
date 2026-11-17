package com.cpcapi.crudmysqlapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cpcapi.crudmysqlapi.model.Product;
import com.cpcapi.crudmysqlapi.repository.ProRepo;

@RestController
public class ProController {

    @Autowired
    ProRepo proprepo;

    @PostMapping("/addPro")
    public String addPro(@RequestBody Product product) {

        proprepo.save(product);

        return "Record Inserted Successfully";
    }

    @GetMapping("/getPro")
    public List<Product> getPro() {

        return (List<Product>) proprepo.findAll();
    }

    @PutMapping("/updatePro")
    public String updatePro(@RequestBody Product product) {

        proprepo.save(product);

        return "Record Updated Successfully";
    }

    @DeleteMapping("/deletePro")
    public String deletePro(@RequestParam int pid) {

        proprepo.deleteById(pid);

        return "Record Deleted Successfully";
    }

}