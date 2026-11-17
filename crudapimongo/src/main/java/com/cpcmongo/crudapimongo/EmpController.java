package com.cpcmongo.crudapimongo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cpcmongo.crudapimongo.Employee;
import com.cpcmongo.crudapimongo.EmpRepo;

@RestController
public class EmpController {
	
	@Autowired
	EmpRepo emprepo;
	
	@PostMapping("/addEmp")
	public String addemp (@RequestBody Employee employee) {
		emprepo.save(employee);
		return "Record Inserted Sucessfully";
	}
     
	@GetMapping("/display")
	public List<Employee> display(){
		return emprepo.findAll();
	}
	
	@DeleteMapping("/delEmp/{eid}")
	public String delEmp(@PathVariable int eid) {
		emprepo.deleteById(eid);
		return "Delete Sucessfully";
	}
	
	@PutMapping("/uptEmp")
	public String uptEmp(@RequestBody Employee employee) {
		
		Employee emp =emprepo.findById(employee.getEid()) .get();
		emp.setEname(employee.getEname());
		emp.setEdept(employee.getEdept());
		emp.setEdesig(employee.getEdesig());
		emprepo.save(emp);
		return "Record Update Sucessfully";
	}
	
}