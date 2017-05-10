package com.abb1cinema.web.domain;

import org.springframework.stereotype.Component;
import lombok.Data;

@Component @Data
public class Customer {
	private String id, pw, name, gender, birth, phone, email, point;
}
