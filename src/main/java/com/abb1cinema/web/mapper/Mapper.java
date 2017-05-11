package com.abb1cinema.web.mapper;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.abb1cinema.web.domain.Customer;

@Repository
public interface Mapper {
	public Customer findCustomer(Map<?,?> map) throws Exception;
	public int existCustomer(Map<?,?> map) throws Exception;
}
