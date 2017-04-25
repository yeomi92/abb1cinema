package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Board {
	String seq, type, title, contents, file, date, hits, customer_id, theater_id, comment_seq;
}
