package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Article {
	String seq, type, title, content, file, date, hits, confirm, customer_id, multiplex_id, comment_seq;
}
