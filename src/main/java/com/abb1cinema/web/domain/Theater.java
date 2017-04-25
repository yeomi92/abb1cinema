package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Theater {
	String seq, name, address, total_multiplex, total_seat, axis, multiplex_id;
}
