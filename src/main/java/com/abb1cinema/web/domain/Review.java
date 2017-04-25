package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Review {
	String seq, type, gpa, contents, date, customer_id;
}
