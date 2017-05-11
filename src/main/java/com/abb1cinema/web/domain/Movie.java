package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Movie {
	String seq, title, rate, count, grade, release, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor;
}
