package com.junittest.crudjunit2026;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import java.util.List;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@TestMethodOrder (MethodOrderer.OrderAnnotation.class)
public class CustRepoTest {
	
	@Autowired
	CustRepo custrepo;
	
	@Test
	@Order(1)
	@Rollback(value=false)
	public void saveCusTest() {
		Customer customer = new Customer("kanthilal","Kanthilal","Suthar","Mysore");
		custrepo.save(customer);
		Assertions.assertThat(customer.getCid()).isGreaterThan(0);
		
	}
	
	@Test
	@Order(2)
	public void getCustTest() {
		List<Customer> customer = custrepo.findAll();
		Assertions.assertThat(customer.size()).isGreaterThan(0);
		
	}
	
	@Test
	@Order(3)
	@Rollback(value=false)
	public void updCustTest() {
		Customer customer = custrepo.findById(1).get();
		customer.setCname("Moahn");
		
		Customer newCust = custrepo.save(customer);
		Assertions.assertThat(newCust.getCname()).isEqualTo("Moahn");
		
		
	}
	
	@Test
	@Order(4)
	@Rollback(value = false)
	public void delCustTest() {
	    boolean beforeDelete = custrepo.findById(1).isPresent();

	    custrepo.deleteById(1);

	    boolean afterDelete = custrepo.findById(1).isPresent();

	    assertTrue(beforeDelete);
	    assertFalse(afterDelete);
	}

}


