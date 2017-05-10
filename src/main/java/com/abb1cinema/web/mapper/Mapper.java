package com.abb1cinema.web.mapper;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.abb1cinema.web.domain.Customer;

@Repository
public interface Mapper {
	public Customer findCustomer(Map<?,?> map) throws Exception;
	
	public int count(Map<?,?> map);
	public int exist(Map<?,?> map) throws Exception;
	public int registerChartFile(Object chart) throws Exception;
}
