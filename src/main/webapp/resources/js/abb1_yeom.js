/*
 ========= abb1-meta ========
 * abb1-algorithm
 * abb1-oop
 * abb1-bbs
 * abb1-component
 * abb1-ui
 * abb1-permission
 * abb1-navi
 * abb1-util
 * abb1-person
 * abb1-info
 *
 ===========================
 */

/* Application NameSpace */
var abb1 = abb1 || {};

		/************************
		 * Model
		 * abb1.context
		 * abb1.session
		 * abb1.util
		 * abb1.algorithm
		 * abb1.oop
		 ***********************/
/*========= abb1-context =========
	@AUTHOR : Junyoung Park
	@CREATE DATE : 2017-04-19
	@UPDATE DATE : 2017-04-19
	@DESC : META-INF
=================================*/
abb1.context = (function(){
	var init = function(context){ 
		abb1.session.init(context);
		onCreate();
	};
	var setContentView = function(){
		
	};
	var onCreate = function(){
		setContentView();
		abb1.component.init();
		abb1.algorithm.init();
		abb1.oop.init();
		abb1.bbs.init();
		abb1.person.init();
		abb1.util.datetime();
	};
	return {
		init : init,
		setContentView : setContentView,
		onCreate : onCreate
	};
})();
/*========= abb1-session =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Session
=================================*/
abb1.session = (function(){ 
	var init = function(context) { 
		sessionStorage.setItem('context',context);
		sessionStorage.setItem('js',context+'/resources/js');
		sessionStorage.setItem('css',context+'/resources/css');
		sessionStorage.setItem('img',context+'/resources/img');
	};
	var getContextPath = function(){ return sessionStorage.getItem('context');};
	var getJavascriptPath = function(){ return sessionStorage.getItem('js');};
	var getStylePath = function() { return sessionStorage.getItem('css');};
	var getImagePath = function() { return sessionStorage.getItem('img');};
	return {
		init : init,
		getContextPath : getContextPath,
		getJavascriptPath : getJavascriptPath,
		getStylePath : getStylePath,
		getImagePath : getImagePath
	};
})();
		/************************
		 * View
		 * abb1.component
		 * 
		 ***********************/
abb1.component = (function(){
	var _body, _wrapper;
	var setBody = function(body) { this._body = body; }
	var getBody = function() { return this._body; }
	var setWrapper = function(wrapper) { this._wrapper = wrapper; }
	var getWrapper = function() { return this._wrapper; }
	var init = function(){ onCreate(); };
	var onCreate = function(){ setContentView(); };
	var setContentView = function() {
		abb1.component.setWrapper($('#wrapper'));
		abb1.component.setBody($('body'));
	};
	return {
		init : init,
		getWrapper : getWrapper,
		setWrapper : setWrapper,
		getBody : getBody,
		setBody : setBody,
		div : function(id){
			return $(id);
		},
		btn : function(id, type){
			return $('<a id=' + id + ' href="#" class="btn ' + type + '" role="button">aButton</a>');
		},
		inputText : function(id){
			return $('<input id="' + id + '" type="text" class="form-control" placeholder="example" aria-describedby="basic-addon1">');
		},
		divAlert : function(type){
			return $('<div class="alert '+type+'" role="alert">example</div>');
		}
	};
})();

/*========= abb1-util =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Etc methods(ex: email check validation, calculation profile, datetime check algorithm)
abb1-util-validation
abb1-util-calcProfile
abb1-util-datetime
=================================*/
abb1.util={
	validation : function(x) {
		return (x != "");
	},
	calcProfile : function(ssn) {
		var arr = [];
		var date = abb1.util.datetime();
		var year = date.substring(0,4)*1, month = date.substring(4,6)*1, day = date.substring(6,8)*1;
		var age = ssn.substring(0,2)*1;
		var flag = ssn.charAt(7) == '3' || ssn.charAt(7) == '4';
		arr.push(flag? '20'+ ssn.substring(0,2) +'년 ' + ssn.substring(2,4) + '월 '+ ssn.substring(4,6) + '일' : '19'+ssn.substring(0,2) + '년 ' + ssn.substring(2,4) + '월 ' + ssn.substring(4,6)+'일');
		arr.push(flag? year-2000-age +'세': year-1900-age+'세');
		arr.push(ssn.charAt(7)==='1' || ssn.charAt(7)==='3' ? '남자' : '여자');
		return arr;
	},
	datetime : function(){	
		var d = new Date();
		var month = d.getMonth() +1;
		var year = d.getYear()-100;
		var calcstr = '20' + year + '0' + month +'' + d.getDate();
		var showstr = '20' + year + '년 0' + month +'월 ' + d.getDate() +'일';
		$('#date').html(showstr);
		return calcstr;
	}
};
/*========= abb1-person =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Using person in OOP
abb1-person-init
=================================*/
abb1.person = (function(){
	var wrapper, ctx, img, js, css;
	var init = function(){
		wrapper = abb1.component.getWrapper();
		ctx = abb1.session.getContextPath();
		img = abb1.session.getImagePath();
		js = abb1.session.getJavascriptPath();
		css = abb1.session.getStylePath();
		$('#brand').on('click',function(){
			alert('brand click!');
		});
		$('#wrapper').load(ctx+'/permission/form');
	};
	return {
		init : init
	};
})();

/*========= abb1-info =========
@AUTHOR : Junyoung Park
@CREATE DATE : 2017-04-19
@UPDATE DATE : 2017-04-19
@DESC : Practice for OOP
=================================*/
abb1.info = (function() { // var를 쓴 것과 같음
	var _name, _age, _gender, _job;
	return {
		setName : function(name) { this._name = name;},
		setAge : function(age) { this._age = age;},
		setGender : function(gender) { this._gender = gender;},
		setJob : function(job) { this._job = job;},
		getName : function() { return this._name;},
		getAge : function() { return this._age;},
		getGender : function() { return this._gender;},
		getJob : function() { return this._job;},
		toString : function() {
			return "입력한 정보<br>이름: " + this._name 
			+ "<br>나이: " + this._age 
			+ "세<br>성별: " + this._gender 
			+ "<br>직업: " + this._job;
		}
	};
})();
/************************
 * Controller
 * abb1.controller
 * 
 ***********************/
abb1.controller = (function(){})();