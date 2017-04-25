package com.abb1cinema.web.domain;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.*;

@Component @Data @Lazy
public class Files {
	String seq, pic_main, pic_director, pic_actor1, pic_actor2, pic_actor3, pic_actor4;
}
