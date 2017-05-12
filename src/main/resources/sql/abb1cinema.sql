-- 1
CREATE TABLE Notice(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
file VARCHAR(200),
title VARCHAR(50) NOT NULL,
content VARCHAR(500) NOT NULL,
reg_date VARCHAR(10) NOT NULL,
hits VARCHAR(4) NOT NULL
);

-- 2
CREATE TABLE Movie(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
count VARCHAR(5),
grade VARCHAR(2) NOT NULL,
released VARCHAR(10) NOT NULL,
info VARCHAR(40) NOT NULL,
synopsys VARCHAR(500) NOT NULL,
male_p VARCHAR(4) NOT NULL,
female_p VARCHAR(4) NOT NULL,
trailer_url VARCHAR(200) NOT NULL,
pic_main VARCHAR(200) NOT NULL,
pic_director VARCHAR(200),
name_director VARCHAR(50),
pic_actor VARCHAR(200),
name_actor VARCHAR(50)
);

-- 3
CREATE TABLE Address(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

-- 4
CREATE TABLE Customer(
id VARCHAR(15) PRIMARY KEY,
pw VARCHAR(15) NOT NULL,
name VARCHAR(15) NOT NULL,
gender VARCHAR(1) NOT NULL,
birth VARCHAR(8) NOT NULL,
phone VARCHAR(11) NOT NULL,
email VARCHAR(30) NOT NULL,
point VARCHAR(5) NOT NULL,
address INT,
FOREIGN KEY(address) REFERENCES Address(seq)
);

ALTER TABLE Customer MODIFY birth VARCHAR(8);

-- 5
CREATE TABLE Reservation(
id VARCHAR(30) PRIMARY KEY,
reg_date VARCHAR(10) NOT NULL,
canceled VARCHAR(1),
price VARCHAR(10),
hcount  VARCHAR(10),
customer_id VARCHAR(15),
FOREIGN KEY(customer_id) REFERENCES Customer(id)
);

-- 6
CREATE TABLE Review(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
spectator VARCHAR(8) NOT NULL,
gpa VARCHAR(2) NOT NULL,
content VARCHAR(300) NOT NULL,
reg_date VARCHAR(10) NOT NULL,
customer_id VARCHAR(15),
movie_seq INT,
FOREIGN KEY(customer_id) REFERENCES Customer(id),
FOREIGN KEY(movie_seq) REFERENCES Movie(seq)
);

-- 7
CREATE TABLE Multiplex(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(20) NOT NULL,
address VARCHAR(40) NOT NULL,
axis VARCHAR(40) NOT NULL
);

-- 8
CREATE TABLE Theater(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(4) NOT NULL,
total_seat VARCHAR(3) NOT NULL,
start_time VARCHAR(5) NOT NULL,
end_time VARCHAR(5) NOT NULL,
price VARCHAR(5) NOT NULL,
multiplex_seq INT,
FOREIGN KEY(multiplex_seq) REFERENCES Multiplex(seq)
);

-- 9
CREATE TABLE Article(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
article_type VARCHAR(4) NOT NULL,
title VARCHAR(50) NOT NULL,
content VARCHAR(500),
file VARCHAR(200),
reg_date VARCHAR(10) NOT NULL,
hits VARCHAR(4) NOT NULL,
customer_id VARCHAR(15),
multiplex_seq INT,
FOREIGN KEY(customer_id) REFERENCES Customer(id),
FOREIGN KEY(multiplex_seq) REFERENCES Multiplex(seq)
);

-- 10
CREATE TABLE Comment(
seq INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
reg_date VARCHAR(10) NOT NULL,
content VARCHAR(300) NOT NULL,
customer_id VARCHAR(15),
article_seq INT,
FOREIGN KEY(customer_id) REFERENCES Customer(id),
FOREIGN KEY(article_seq) REFERENCES Article(seq)
);

DROP TABLE Notice CASCADE;
DROP TABLE Comment CASCADE;
DROP TABLE Theater CASCADE;
DROP TABLE Review CASCADE;
DROP TABLE Reservation CASCADE;
DROP TABLE Movie CASCADE;
DROP TABLE Article CASCADE;
DROP TABLE Customer CASCADE;
DROP TABLE Multiplex CASCADE;
DROP TABLE Address CASCADE;

show tables;
-------------------- Dummy ------------------------------
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항1','콘텐츠1','2017.05.10','393');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항2','콘텐츠2','2017.05.11','493');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항3','콘텐츠3','2017.05.12','353');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항4','콘텐츠4','2017.05.13','399');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항5','콘텐츠5','2017.05.14','395');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항6','콘텐츠6','2017.05.15','318');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항7','콘텐츠7','2017.05.16','4198');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항8','콘텐츠8','2017.05.17','185');
INSERT INTO Notice(file, title, content, reg_date, hits) VALUES ('파일없음','공지사항9','콘텐츠9','2017.05.18','1888');

INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('보안관','181','15','2017.05.03','드라마','과잉 수사로 잘리고 낙향한 전직 형사 대호(이성민)<br/>보안관을 자처하며 바다만큼 드넓은 오지랖으로 고향 ‘기장’ 을 수호한다.<br/>평화롭던 동네에 비치타운 건설을 위해 성공한 사업가 종진(조진웅)이 서울에서 내려온 그때,<br/>인근 해운대에 마약이 돌기 시작한다.<br/>종진의 모든 행보가 의심스러운 대호는 그를 마약사범으로 의심해 처남 덕만(김성균)을 조수로 ‘나 홀로 수사’에 나서지만 민심은 돈 많고 세련된 종진에게로 옮겨간 지 오래…<br/><br/>두고 봐라, 이래 당하고만 있겠나. 게임은 인자 시작이다!','200','100','https://www.youtube.com/embed/nRVuV8nuOmQ','movie_poster_0.png','director_0.jpg','김형주','actor_0.png','이성민');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('특별시민','488','15','2017.04.26','드라마','사람들이 믿게 만드는 것. 그게 바로 선거야<br/><br/>오직 서울만 사랑하는, 발로 뛰는 서울시장 ‘변종구’(최민식)<br/>하지만 실은 어느 정치인보다도 최고 권력을 지향하며 이미지 관리에 철저한 정치 9단이다. 선거 공작의 일인자인 선거대책본부장 ‘심혁수’(곽도원)를 파트너로 삼고, 겁없이 선거판에 뛰어든 젊은 광고 전문가 ‘박경’(심은경)까지 새롭게 영입한 변종구는 차기 대권을 노리며, 헌정 사상 최초의 3선 서울시장에 도전한다. 하지만 상대 후보들의 치열한 공세에 예기치 못했던 사건들까지 일어나며 변종구의 3선을 향한 선거전에 위기가 거듭되는데...','150','135','https://www.youtube.com/embed/tKu6j2ApB58','movie_poster_1.png','director_1.jpg','박인제','actor_1.png','최민식');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('분노의 질주: 더 익스트림','800','15','2017.04.12','스릴러','마침내 평화로운 일상으로 돌아온 리더 ‘도미닉’(빈 디젤)과 멤버들.<br>그러던 어느 날, 멤버들은 도미닉이 첨단 테러 조직의 리더 ‘사이퍼’(샤를리즈 테론)와 함께 사상 최악의 테러를 계획하고 있음을 알게 된다. 리더의 배신으로 위기에 놓인 멤버들은 한때 팀을 모두 전멸시키려 했던 ‘데카드 쇼’(제이슨 스타뎀)까지 영입해 최악의 적이 되어버린 도미닉과의 피할 수 없는 대결을 앞두게 되는데…','800','30','https://www.youtube.com/embed/fToB05kz3Eg','movie_poster_2.png','director_2.jpg','F.게리 그레이','actor_2.png','빈 디젤');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('임금님의 사건수첩','100','12','2017.04.12','스릴러','모든 사건은 직접 파헤쳐야 직성이 풀리는 총명한 왕 ‘예종’(이선균).<br/>그를 보좌하기 위해 학식, 가문, 외모(?)는 물론 한 번 본 것은 절대 잊지 않는 비상한 재주까지 겸비한 신입사관 ‘이서’가 임명된다. 하지만 의욕과 달리 어리바리한 행동을 일삼던 이서는 예종의 따가운 눈총을 한 몸에 받으며 고된 궁궐 생활을 시작한다.<br/>때마침 한양에 괴이한 소문이 돌기 시작하고, 예종은 모든 소문과 사건이 심상치 않음을 직감한다. 예종과 이서는 모든 과학적 지식과 견문을 총동원, 괴소문의 실체를 파헤치기 위해 나서는데…!','80','10','https://www.youtube.com/embed/9Yemv2RlWnA','movie_poster_4.png','director_4.jpg','문현성','actor_4.png','이선균');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('가디언즈 오브 더 갤럭시2','1200','12','2017.04.12','액션/모험/SF','최강 빌런 ‘타노스’에 맞서 은하계를 구하고 최고의 해결사로 등극한 ‘가.오.갤’ 멤버들.<br/>하지만 외계 여사제 ‘아이샤’가 맡긴 임무를 수행하던 중 실수로 또 다시 쫓기는 신세로 전락한다. 한편 자신에게 숨겨진 힘의 원천에 대해 고민하던 리더 ‘스타로드’는 갑작스레 나타난 아버지로 인해 또 다른 위기에 빠지게 되는데…','60','300','https://www.youtube.com/embed/SFGlghyeMuQ','movie_poster_5.png','director_5.jpg','제임스 건','actor_5.png','크리스 프랫');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('아빠와 딸','50','12','2017.04.12','드라마','공부, 공부, 공부하라는 잔소리를 입에 달고 사는 만년 과장 아빠.<br/>세상 다 싫지만 선배만은 넘나 좋은 여고생 딸.<br/><br/>딸이 꿈꾸던 첫 데이트가 현실이 되던 찰나,<br/>아빠가 절실한 승진의 기회를 잡나 싶던 그때<br/>두 사람의 몸이 바뀌는 청천벽력 같은 일이 벌어진다!<br/><br/>서로의 몸으로 살아야 하는 아빠와 딸.<br/>첫사랑 사수 vs 직장 사수를 위해 상상을 초월한 노력을 하지만 상황은 오히려 꼬여만 가고, 사생활은 물론 마음까지 엿보게 되면서 서로 몰랐던 점을 점점 알아가게 되는데...','5','7','https://www.youtube.com/embed/IatA5g1nXeo','movie_poster_6.png','director_6.jpg','김형협','actor_6.png','윤제문');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('미녀와 야수','1654','전','2017.03.16','멜로/애정','똑똑하고 아름다운 ‘벨(엠마 왓슨)’은 아버지와 살고 있는 작은 마을에서 벗어나 운명적인 사랑과 모험을 꿈꾼다. 어느 날 행방불명된 아버지를 찾아 폐허가 된 성에 도착한 벨은 저주에 걸린 ‘야수’(댄 스티븐스)를 만나 아버지 대신 성에 갇히고, 야수 뿐 아니라 성 안의 모든 이들이 신비로운 장미의 마지막 꽃잎이 떨어지기 전에 저주를 풀지 못하면 영원히 인간으로 돌아올 수 없는 운명임을 알게 된다. 성에서 도망치려던 벨은 위험한 상황에서 자신을 보호해 준 야수의 진심을 알게 되면서 차츰 마음을 열어가기 시작하는데…','500','720','https://www.youtube.com/embed/n7LZA4Er7_g','movie_poster_7.png','director_7.jpg','빌 콘돈','actor_7.png','엠마 왓슨');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('보스베이비','896','전','2017.05.03','애니메이션','어느 날 굴러들어온 아기 동생에게 엄빠의 사랑을 모두 빼앗겨 버린 ‘팀’<br/>평소엔 앙증맞은 베이비, 알고 보니 ‘베이비 주식회사’의 카리스마 보스<br/>‘보스 베이비’는 비밀 임무를 수행하기 위해 파견근무 중!<br/><br/>팀은 엄빠의 사랑을 되찾기 위해<br/>보스 베이비는 라이벌 ‘퍼피 주식회사’를 무찌르기 위해<br/>원치 않는 공조를 시작한다','321','456','https://www.youtube.com/embed/Hsb8l0B5X-c','movie_poster_8.png','director_8.jpg','톰 맥그래스','actor_8.png','알렉 볼드윈');
INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
VALUES ('공각기동대: 고스트 인 더 쉘','1200','15','2017.03.29','액션/모험/SF','인간과 로봇의 경계가 무너진 가까운 미래,<br/>강력 범죄와 테러 사건을 담당하는 엘리트 특수부대 섹션9.<br/>인간과 인공지능이 결합해 탄생한 특수요원이자 섹션9을 이끄는 메이저(스칼렛 요한슨)는 세계를 위협하는 음모를 지닌 범죄 테러 조직을 저지하라는 임무를 받는다. 첨단 사이버 기술을 보유한 ‘한카 로보틱스’를 파괴하려는 범죄 테러 조직을 막기 위해 엘리트 특수부대 섹션9이 나서기 시작하고 사건을 깊이 파고들수록 메이저는 자신의 과거와 존재에 대한 의문을 갖게 되는데...!<br/><br/>','225','542','https://www.youtube.com/embed/eWMBQhdcCTo','movie_poster_3.png','director_3.jpg','루퍼트 샌더슨','actor_3.png','스칼렛 요한슨');
--select * from movie;
--INSERT INTO Movie(title, count, grade, released, info, synopsys, male_p, female_p, trailer_url, pic_main, pic_director, name_director, pic_actor, name_actor) 
--VALUES ('공각기동대: 고스트 인 더 쉘','1200','15','2017.03.29','액션/모험/SF','시놉시스','225','542','https://www.youtube.com/embed/eWMBQhdcCTo','movie_poster_3.png','director_3.jpg','루퍼트 샌더슨','actor_3.png','스칼렛 요한슨');

--delete from movie where seq = 1;

INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv1','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv2','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv3','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv4','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv5','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv6','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv7','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv8','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('babungv9','1234','박준용','M','900518','01022068900','babungv@gmail.com','0');
INSERT INTO Customer(id, pw, name, gender, birth, phone, email, point) VALUES ('t','1','테스트','M','19900518','01022068900','babungv@gmail.com','0');




INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-A01','2017.05.10','N','10000','1','babungv1');
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-A02','2017.05.10','N','10000','1','babungv2');
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-B03','2017.05.10','N','10000','1','babungv3');
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-B04','2017.05.10','N','10000','1','babungv4');
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-C05','2017.05.10','N','10000','1','babungv5');
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-D06','2017.05.10','N','10000','1','babungv6');
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-E07','2017.05.10','N','10000','1','babungv7');
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-E08','2017.05.10','N','10000','1','babungv8');
INSERT INTO Reservation(id, reg_date, canceled, price, hcount, customer_id) VALUES ('001-001-1805-E09','2017.05.10','N','10000','1','babungv9');

INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','7','재밌게 봤어요','2017.05.10','babungv1', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','8','재밌게 봤어요','2017.05.10','babungv2', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','9','재밌게 봤어요','2017.05.10','babungv3', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','7','재밌게 봤어요','2017.05.11','babungv4', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','8','재밌게 봤어요','2017.05.11','babungv5', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','5','재밌게 봤어요','2017.05.12','babungv6', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','10','재밌게 봤어요','2017.05.12','babungv7', 1);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','7','재밌게 봤어요','2017.05.12','babungv8', 2);
INSERT INTO Review(spectator, gpa, content, reg_date, customer_id, movie_seq) VALUES ('실관람객','10','재밌게 봤어요','2017.05.12','babungv9', 2);

INSERT INTO Multiplex(name, address, axis) values ('가산디지털','서울 금천구 가산동,60-8','37.477633, 126.889149');

INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('1관','100','18:00','18:05','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('1관','100','18:10','18:15','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('1관','100','18:20','18:25','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('1관','100','18:30','18:35','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('2관','100','18:00','18:05','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('2관','100','18:10','18:15','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('2관','100','18:20','18:25','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('2관','100','18:30','18:35','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('3관','100','18:00','18:05','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('3관','100','18:10','18:15','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('3관','100','18:20','18:25','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('3관','100','18:30','18:35','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('4관','100','18:00','18:05','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('4관','100','18:10','18:15','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('4관','100','18:20','18:25','10000', 1);
INSERT INTO Theater(name, total_seat, start_time, end_time, price, multiplex_seq) VALUES ('4관','100','18:30','18:35','10000', 1);

INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요 박준용입니다1','ㅎㅎㅎㅎ','','2017.05.10','123','babungv1',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요 박준용입니다2','ㅎㅎㅎㅎ','','2017.05.11','123','babungv2',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요 박준용입니다3','ㅎㅎㅎㅎ','','2017.05.12','123','babungv3',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요 박준용입니다4','ㅎㅎㅎㅎ','','2017.05.13','123','babungv4',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요 박준용입니다5','ㅎㅎㅎㅎ','','2017.05.14','123','babungv5',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요 박준용입니다6','ㅎㅎㅎㅎ','','2017.05.15','123','babungv6',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요!!! 박준용입니다1','ㅎㅎㅎㅎ','','2017.05.16','123','babungv1',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요!!! 박준용입니다2','ㅎㅎㅎㅎ','','2017.05.17','123','babungv2',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요!!! 박준용입니다3','ㅎㅎㅎㅎ','','2017.05.17','123','babungv3',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요!! 박준용입니다4','ㅎㅎㅎㅎ','','2017.05.17','123','babungv4',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요!!! 박준용입니다5','ㅎㅎㅎㅎ','','2017.05.18','123','babungv5',1);
INSERT INTO Article(article_type, title, content, file, reg_date, hits, customer_id, multiplex_seq) 
VALUES ('문의','안녕하세요!!! 박준용입니다6','ㅎㅎㅎㅎ','','2017.05.19','123','babungv6',1);

INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017.05.10','재미업쪙','babungv2',1);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017.05.11','재미이쪙','babungv2',1);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017.05.12','재미게시글3','babungv2',1);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017.05.13','재미게시글4','babungv2',1);
INSERT INTO Comment(reg_date, content, customer_id, article_seq) VALUES ('2017.05.14','여미','babungv2',1);

