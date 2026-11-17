package com.cpcapi.crudmysqlapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
	
	@Id
	private int pid;
	private String pcate;
	private String pname;
	private String pdes;
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPcate() {
		return pcate;
	}
	public void setPcate(String pcate) {
		this.pcate = pcate;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPdes() {
		return pdes;
	}
	public void setPdes(String pdes) {
		this.pdes = pdes;
	}
	@Override
	public String toString() {
		return "Product [pid=" + pid + ", pcate=" + pcate + ", pname=" + pname + ", pdes=" + pdes + "]";
	}
	

}
