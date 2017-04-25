package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Movie {
	String seq, title, rate, gpa, grade, release_date, info, synopsys, casting, male_p, female_p, trailer_url, review_seq, files_id;
}
