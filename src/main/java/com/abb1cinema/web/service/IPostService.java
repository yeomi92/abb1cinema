package com.abb1cinema.web.service;

@org.springframework.stereotype.Service
@FunctionalInterface
public interface IPostService {
	public int execute(Object o) throws Exception;
}
