package com.abb1cinema.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Information {
	String mulSeq, mulName, mulAddress, axis, theaterSeq, theaterName, totalSeat, startTime, endTime, price, movieSeq, movieTitle, movieCount, movieGrade, released, movieInfo, synopsys, maleP, femalP,trailerUrl, trailerMain, picMain, picDirector, nameDirector, picActor, nameActor; 
}
