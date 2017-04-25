package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Reservation {
	String id, date, headcount, is_canceled, customer_id, movie_id, multiplex_id, theater_id, seat_id;
}
