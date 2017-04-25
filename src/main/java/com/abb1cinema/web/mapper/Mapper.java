package com.abb1cinema.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface Mapper {
	public int count(Map<?,?> map);
	public int exist(Map<?,?> map) throws Exception;
	public int registerChartFile(Object chart) throws Exception;
}
