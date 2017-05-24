package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Reservation {
	String id, reg_date, canceled, price, hcount, customer_id, showing_seq;
}
