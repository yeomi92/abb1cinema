/*
========= app-meta ==========
app-algorithm 
	app-algorithm-series
	app-algorithm-array
	app-algorithm-matrix
	app-algorithm-math
	app-algorithm-application
app-bbs
	
app-component
	app-component-button
	app-component-input
	app-component-alert
	app-component-list
	app-component-table
app-context
app-oop
	app-oop-encapsulation
	app-oop-inheritance
	app-oop-polymorphism
app-permission
app-person
	app-person-patient
	app-person-doctor
	app-person-nurse
	app-person-admin
app-session
app-ui
app-util
==============================
*/
var app=app||{}; //namespace pattern
/*************************************************************************************
 * Model-logic
 * app.context=(function(){    //META-INFO같은 것
 * app.session=(function(){
 * app.util=(function(){
 * app.algorithm=(function(){
 * app.oop=(function(){
 *************************************************************************************/
app.context=(function(){
	//android의 context와 같은 기능
	var init=function(context){
		app.session.init(context); //templatemethod pattern
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		app.person.init();
		app.algorithm.init();
		app.component.init();
		app.oop.init();
		app.bbs.init();
	};
	var setContentView=function(){
		
	};
	return{
		init: init,
		setContentView: setContentView,
		onCreate: onCreate
	}
})();
app.session=(function(){
	//hook(설정값이 다 설정됬다.)
	var init=function(context){
		sessionStorage.setItem('context',context);
		sessionStorage.setItem('js',context+'/resources/js');
		sessionStorage.setItem('css',context+'/resources/css');
		sessionStorage.setItem('img',context+'/resources/img');
	};
	var getContextPath=function(){return sessionStorage.getItem('context');};
	var getJavaScriptPath=function(){return sessionStorage.getItem('js');};
	var getStylePath=function(){return sessionStorage.getItem('css');};
	var getImagePath=function(){return sessionStorage.getItem('img');};
	return{
		init: init,
		getContextPath: getContextPath,
		getJavaScriptPath: getJavaScriptPath,
		getStylePath: getStylePath,
		getImagePath: getImagePath
	};
})();
/*
========= app-algorithm ====
@AUTHOR : yheisun@gmail.com
@CREATE DATE : 2017-4-19
@UPDATE DATE : 2017-4-19
@DESC : 알고리즘
==============================
*/
app.algorithm=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		series();
		arr();
		matrix();
		math();
		appl();
		
	};
	var setContentView=function(){};
	/*등차수열*/
	var aSeries=function(inputVal) {
		$('#tableRight').empty();
		var arr=inputVal.split(" ");
		var start=arr[0]*1;
		var limit=arr[1]*1;
		var diff=arr[2]*1;
		console.log('inputVal:'+start+", "+limit+", "+diff);
		var result = 0;
		var resultStr="";
		for (i=start;i<=limit;i+=diff) {
			result += i;
			resultStr+=i+(((i+diff)>limit)?"=":"+");
		}
		return resultStr+result;
	};
	/*스위치수열*/
	var swSeries=function(limit) {
		$('#tableRight').empty();
		var result = 0;
		var resultStr = "";
		var sw = 1;
		for (i = 1; i <= limit; i++) {
			result += (sw * i);
			sw *= -1;
		}
		return result;
	};
	/*계차수열*/
	var dSeries=function(limit) {
		$('#tableRight').empty();
		var temp = 1;
		var result = 0;
		for (i = 0; i <= limit; i++) {
			temp += i;
			result += temp;
		}
		return result;
	};
	/*팩토리얼수열*/
	var factorial=function(limit) {
		$('#tableRight').empty();
		var result = 0;
		var str = "";
		for (i = 1; i <= limit; i++) {
			var temp = 1;
			for (k = 1; k <= i; k++) {
				temp *= k;
			}
			result += temp;
		}
		return result;
	};
	/*피보나치수열*/
	var fibonacci=function(limit) {
		$('#tableRight').empty();
		var a = 1;
		var b = 1;
		var c = 0;
		var result = 2;
		for (i = 1; i <= limit - 2; i++) {
			c = a + b;
			result += c;
			a = b;
			b = c;
		}
		return result;
	};
	/*선택정렬*/
	var selectSort=function(data,n) {
		var temp = 0;
		var result = "";
		console.log('n: '+n);
		for (i = 0; i < n*1; i++) {
			for (j = i + 1; j < 6; j++) {
				if (data[i] > data[j]) {
					temp = data[i];
					data[i] = data[j];
					data[j] = temp;
				}
			}
		}
		return data;
	};
	/*버블정렬*/
	var bubbleSort=function(data,n) {
		var temp = 0;
		var result = "";
		console.log('n: '+n);
		for (k = 0; k < n*1; k++) {
			for (i = 0; i <5; i++) {
				if (data[i] > data[i + 1]) {
					temp = data[i];
					data[i] = data[i + 1];
					data[i + 1] = temp;
				}
			}
		}
		return data;
	};
	/*삽입정렬*/
	var insertSort=function(data,n) {
		var temp = 0;
		var result = "";
		console.log('n: '+n);
		for (i = 1; i < n*1+1; i++) {
			for (k = 0; k <= i; k++) {
				if (data[i] < data[k]) {
					temp = data[i];
					data[i] = data[k];
					data[k] = temp;
				}
			}
		}
		return data;
	};
	var rank=function(data){
		var result="";
		var rank=[1,1,1,1,1,1];
		for(i=0;i<data.length;i++){
			for(k=0;k<data.length;k++){
				if(data[i]<data[k]){
					rank[i]++;
				}
			}
		}
		return rank;
	};
	var series=function(){
		$('#series').on('click',function() {
			var wrapper=app.component.getWrapper();
			wrapper.empty();
	         wrapper.append(app.algorithm.TABLE);
	         var arr = [{id:'aSeries', txt:'등차수열'},
	            {id:'swSeries', txt:'스위치수열'},
	            {id:'dSeries', txt:'계차수열'},
	            {id:'factorial', txt:'팩토리얼'},
	            {id:'fibonacci', txt:'피보나치'}];
	         var str = '';
	         $.each(arr, function(i,j){
	            str+='<li id="' + j.id + '" class="list-group-item"><a href="#">' + j.txt + '</a></li>';
	         });
	         var tableLeft = $('#tableLeft');
	         tableLeft.empty();
	         tableLeft.html(str);
	         var tableRight = $('#tableRight');   
	         tableRight.empty();
			app.component.inputText('inputText').attr('placeholder', 'start limit 공차 입력').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo(tableRight).on('click',function() {
				console.log($('#inputText').val());
				var result=app.algorithm.aSeries($('#inputText').val());
				app.component.divAlert('alert-primary').html('등차수열 결과<br>'+result).appendTo(tableRight);
			});
			$('#aSeries').on('click',function() {
				$('#tableRight').empty();
				app.component.inputText('inputText').attr('placeholder', 'start limit 공차 입력').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('등차수열의 합').appendTo(tableRight).on('click', function() {
					var result=app.algorithm.aSeries($('#inputText').val());
					app.component.divAlert('alert-primary').html('등차수열 결과<br>'+result).appendTo(tableRight);
				});
			});
			$('#swSeries').on('click',function() {
				$('#tableRight').empty();
				app.component.inputText('inputText').attr('placeholder', 'limit').appendTo(tableRight);
				app.component.aButton('aButton','btn-success').html('스위치수열의 합').appendTo(tableRight).on('click', function() {
					var result=app.algorithm.swSeries($('#inputText').val());
					app.component.divAlert('alert-success').html('스위치수열 결과: ' + result).appendTo(tableRight);
				});
			});
			$('#dSeries').on('click',function() {
				$('#tableRight').empty();
				app.component.inputText('inputText').attr('placeholder', 'limit').appendTo(tableRight);
				app.component.aButton('aButton','btn-info').html('계차수열의 합').appendTo(tableRight).on('click', function() {
					var result=app.algorithm.dSeries($('#inputText').val());
					app.component.divAlert('alert-info').html('계차수열 결과: ' + result).appendTo(tableRight);
				});
			});
			$('#factorial').on('click',function() {
				$('#tableRight').empty();
				app.component.inputText('inputText').attr('placeholder', 'limit').appendTo(tableRight);
				app.component.aButton('aButton','btn-warning').html('팩토리얼수열의 합').appendTo(tableRight).on('click',function() {
					var result=app.algorithm.factorial($('#inputText').val());
					app.component.divAlert('alert-warning').html('팩토리얼수열 결과: ' + result).appendTo(tableRight);
				});
			});
			$('#fibonacci').on('click',function() {
				$('#tableRight').empty();
				app.component.inputText('inputText').attr('placeholder', 'limit').appendTo(tableRight);
				app.component.aButton('aButton','btn-danger').html('피보나치수열의 합').appendTo(tableRight).on('click',function() {
					var result=app.algorithm.fibonacci($('#inputText').val());
					app.component.divAlert('btn-danger').html('피보나치수열 결과: ' + result).appendTo(tableRight);
				});
			});
		});
	};	
	var arr=function(){
		$('#array').on('click',function() {
			var wrapper=app.component.getWrapper();
			wrapper.empty();
	         wrapper.append(app.algorithm.TABLE);
	         var arr = [{id: 'selectSort', txt:'선택정렬'},
	            {id: 'bubbleSort', txt:'버블정렬'},
	            {id: 'insertSort', txt:'삽입정렬'},
	            {id: 'ranking', txt:'석차구하기'},
	            {id: 'binSearch', txt:'이분검색'},
	            {id: 'merge', txt:'병합'},
	            {id: 'stack', txt:'스택'}];
	         var str = '';
	         $.each(arr, function(i,j){
	            str+='<li id="' + j.id + '" class="list-group-item"><a href="#">' + j.txt + '</a></li>';
	         });
	         var tableLeft = $('#tableLeft');
	         tableLeft.empty();
	         tableLeft.html(str);
	         var tableRight = $('#tableRight');   
	         tableRight.empty();
	         var arr = randomGen(6);
	            tableRight.html(app.component.horList(arr,'default'));
	            app.component.inputText('inputText').attr('placeholder', '정렬 회전 수 입력').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('선택정렬').appendTo(tableRight).on('click',function() {
					var result=selectSort(arr);
					tableRight.append(app.component.horList(result,'default'));
				});
			$('#selectSort').on('click',function() {
				tableRight.empty();
				var arr = randomGen(6);
	            tableRight.html(app.component.horList(arr,'default'));
	            app.component.inputText('inputText').attr('placeholder', '정렬 회전 수 입력').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('선택정렬').appendTo(tableRight).on('click',function() {
					var result=selectSort(arr,$('#inputText').val());
					$('#aButton').remove();
					$('#inputText').remove();
					tableRight.append(app.component.horList(result,'default'));
				});
			});
			$('#bubbleSort').on('click',function() {
				tableRight.empty();
				var arr = randomGen(6);
	            tableRight.html(app.component.horList(arr,'default'));
	            app.component.inputText('inputText').attr('placeholder', '정렬 회전 수 입력').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('버블정렬').appendTo(tableRight).on('click',function() {
					var result=bubbleSort(arr,$('#inputText').val());
					tableRight.append(app.component.horList(result,'default'));
				});
			});
			$('#insertSort').on('click',function() {
				tableRight.empty();
				var arr = randomGen(6);
	            tableRight.html(app.component.horList(arr,'default'));
	            app.component.inputText('inputText').attr('placeholder', '정렬 회전 수 입력').appendTo(tableRight);
				app.component.aButton('aButton','btn-primary').html('삽입정렬').appendTo(tableRight).on('click',function() {
					var result=insertSort(arr,$('#inputText').val());
					tableRight.append(app.component.horList(result,'default'));
				});
			});
			$('#ranking').on('click',function() {
				tableRight.empty();
				var arr = randomGen(6);
	            tableRight.html(app.component.horList(arr,'default'));
				app.component.aButton('aButton','btn-primary').html('석차구하기').appendTo(tableRight).on('click',function() {
					var result=rank(arr);
					$('#aButton').remove();
					tableRight.append(app.component.horList(result,'default'));
				});
			});
		});
	};
	
	var randomGen = function(n){
	    var arr=[];
	    for(i=0;i<n;i++){
	       arr[i]=(Math.floor(Math.random()*45)+1);
	       for(k=i;k>0;k--){
				if(arr[i]==arr[k-1]){
					console.log('같으면 들어온다.'+arr[i]+', '+arr[k-1]);
					i--;
				}
	       }
	    }
	    return arr;
	};
	var horizontalTable = function(arr){
		var table='';
		table += '<table style="width:210px; height:280px; border-collapse: collapse; border: 1px solid black; margin: 0 auto"><tbody><tr><td>';
		$.each(arr, function(i,j){
		table += '<td>' + arr[i] + '</td>';
		});
		table += '</tr></tbody></table>';
		$('#table td').css('border', '1px solid black');
		return table;
	};
	var basic=function(){
		$('#basic').on('click',function(){
			var mtx = new Array(new Array(5), new Array(5),new Array(5), new Array(5),new Array(5));
			var jason=[
		        {
		            a : 1,
		            b : 2,
		            c : 3,
		            d : 4,
		            e : 5
		        },
		        {
		        	a : 6,
		            b : 7,
		            c : 8,
		            d : 9,
		            e : 10
		        },
		        {
		        	a : 11,
		            b : 12,
		            c : 13,
		            d : 14,
		            e : 15
		        },
		        {
		        	a : 16,
		            b : 17,
		            c : 18,
		            d : 19,
		            e : 20
		        },
		        {
		        	a : 21,
		            b : 22,
		            c : 23,
		            d : 24,
		            e : 25
		        }
		    ];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
	};
	
	var zigzag=function(){
		$('#zigzag').on('click',function(){
			var a=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var k = 0; // 1씩 증가되는 숫자가 저장될 변수
	        var i = 0; // 배열의 행 위치를 지정해 주는 변수
	        var j = 0; // 배열의 열 위치를 지정해 주는 변수
	        var l = 0; // 배열의 열 시작 위치를 지정해 주는 변수
	        var m = 4; // 배열의 열 끝 위치를 지정해 주는 변수
	        var n = 0; // 증가 값을 지정해 주는 스위치 변수
	        var p = 0; // 열의 시작 위치(l)과 끝 위치(m)의 값을 바꿀 때 사용하는 임시 변수
			for(i=0;i<5;i++){
				if(n==0){
					for(j=l;j<=m;j++){
							k++;
							a[i][j]=k;
					}
				}else{
					for(j=l;j>=m;j--){
							k++;
							a[i][j]=k;
					}
				}
				p=l;
				l=m;
				m=p;
				if(n==0){
					n=1;
				}else{
					n=0;
				}
			}	
			var jason=[
		        {
		            a : a[0][0],
		            b : a[0][1],
		            c : a[0][2],
		            d : a[0][3],
		            e : a[0][4]
		        },
		        {
		        	a : a[1][0],
		            b : a[1][1],
		            c : a[1][2],
		            d : a[1][3],
		            e : a[1][4]
		        },
		        {
		        	a : a[2][0],
		            b : a[2][1],
		            c : a[2][2],
		            d : a[2][3],
		            e : a[2][4]
		        },
		        {
		        	a : a[3][0],
		            b : a[3][1],
		            c : a[3][2],
		            d : a[3][3],
		            e : a[3][4]
		        },
		        {
		        	a : a[4][0],
		            b : a[4][1],
		            c : a[4][2],
		            d : a[4][3],
		            e : a[4][4]
		        }
		    ];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
	};
	
	var diamond=function(){
		$('#diamond').on('click',function(){
			var a=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var k=0;//1씩 증가하는 변수
			var i=0;//배열의 행위치
			var j=0;//배열의 열위치
			var s=2;//열의 시작 위치
			var e=2;//열의 끝 위치
			for(i=0;i<5;i++){
				for(j=s;j<=e;j++){
					k++;
					a[i][j]=k;
				}
				if(i>1){
					s++;
					e--;
				}else{
					s--;
					e++;
				}
			}
			var jason=[
		        {
		            a : a[0][0],
		            b : a[0][1],
		            c : a[0][2],
		            d : a[0][3],
		            e : a[0][4]
		        },
		        {
		        	a : a[1][0],
		            b : a[1][1],
		            c : a[1][2],
		            d : a[1][3],
		            e : a[1][4]
		        },
		        {
		        	a : a[2][0],
		            b : a[2][1],
		            c : a[2][2],
		            d : a[2][3],
		            e : a[2][4]
		        },
		        {
		        	a : a[3][0],
		            b : a[3][1],
		            c : a[3][2],
		            d : a[3][3],
		            e : a[3][4]
		        },
		        {
		        	a : a[4][0],
		            b : a[4][1],
		            c : a[4][2],
		            d : a[4][3],
		            e : a[4][4]
		        }
		    ];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
	};
	
	var sandGlass=function(){
		$('#sandGlass').on('click',function(){
			var a=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var x = 5; // 입력 받은 배열의 크기가 저장될 변수, 즉 x가 5면 배열의 크기는 5행 5열
	        var m = 2; // 배열의 중간 행 번호가 저장될 변수, 즉 5행 5열의 배열인 경우 m은 3
	        var l = x; // 행에서 열의 시작 위치 또는 끝 위치를 지정해 주는 변수
	        var i = 0; // 배열의 행 위치를 지정해 주는 변수
	        var j = 0; // 배열의 열 위치를 지정해 주는 변수
	        var k = 0; // 1씩 증가되는 숫자가 저장될 변수
	        for(i=0;i<=m;i++){
	        	l--;
	        	for(j=i;j<=l;j++){
	        		k++;
	        		a[i][j]=k;
	        	}
	        }
	        for(i=m+1;i<x;i++){
	        	l--;
	        	for(j=l;j<=i;j++){
	        		k++;
	        		a[i][j]=k;
	        	}
	        }
	        var jason=[
		        {
		            a : a[0][0],
		            b : a[0][1],
		            c : a[0][2],
		            d : a[0][3],
		            e : a[0][4]
		        },
		        {
		        	a : a[1][0],
		            b : a[1][1],
		            c : a[1][2],
		            d : a[1][3],
		            e : a[1][4]
		        },
		        {
		        	a : a[2][0],
		            b : a[2][1],
		            c : a[2][2],
		            d : a[2][3],
		            e : a[2][4]
		        },
		        {
		        	a : a[3][0],
		            b : a[3][1],
		            c : a[3][2],
		            d : a[3][3],
		            e : a[3][4]
		        },
		        {
		        	a : a[4][0],
		            b : a[4][1],
		            c : a[4][2],
		            d : a[4][3],
		            e : a[4][4]
		        }
		    ];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
	};
	
	var snail=function(){
		$('#snail').on('click',function(){
			var a=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
			var k = 0; // 1씩 증가되는 숫자가 저장될 변수
	        var i = 0; // 배열의 행 위치를 지정해 주는 변수
	        var n = 0; // 반복문의 반복 변수
	        var j = -1; // 배열의 열 위치를 지정해 주는 변수
	        var c = 1; // 행과 열의 증가 혹은 감소 여부가 지정될 변수, 즉 C가 -1이면 행이나 열을 감소하고, 1이면 행이나 열을 증가
	        var f = 5; // 각 회전에서 수행할 수행 횟수가 지정될 변수
	        while(1){
	        	for(n=1;n<=f;n++){
	        		k++;
	        		j+=c;
	        		a[i][j]=k;
	        	}
	        	f--;
	        	if(f<=0){
	        		break;
	        	}
	        	for(n=1;n<=f;n++){
	        		k++;
	        		i+=c;
	        		a[i][j]=k;
	        	}
	        	c*=-1;
	        }
	        var jason=[
		        {
		            a : a[0][0],
		            b : a[0][1],
		            c : a[0][2],
		            d : a[0][3],
		            e : a[0][4]
		        },
		        {
		        	a : a[1][0],
		            b : a[1][1],
		            c : a[1][2],
		            d : a[1][3],
		            e : a[1][4]
		        },
		        {
		        	a : a[2][0],
		            b : a[2][1],
		            c : a[2][2],
		            d : a[2][3],
		            e : a[2][4]
		        },
		        {
		        	a : a[3][0],
		            b : a[3][1],
		            c : a[3][2],
		            d : a[3][3],
		            e : a[3][4]
		        },
		        {
		        	a : a[4][0],
		            b : a[4][1],
		            c : a[4][2],
		            d : a[4][3],
		            e : a[4][4]
		        }
		    ];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
	};
	
	var magicSquare=function(){
		$('#magicSquare').on('click',function(){
			var a = new Array(new Array(5), new Array(5),new Array(5), new Array(5),new Array(5));
			var i = 0; // 배열의 행 위치를 지정해 주는 변수
	        var j = 2*1; // 배열의 열 위치를 지정해 주는 변수
	        var k = 0; // 1에서 25까지 1씩 증가되는 숫자가 저장될 변수
	        var nmg = 0; // k가 5의 배수인지를 확인하기 위해 계산한 후 나머지가 저장될 변수
	        for(k=1;k<=25;k++){
	        	console.log('i, j, k: '+i+', '+j+', '+k);	
	        	a[i][j]=k;
	        	nmg=k%5;
	        	console.log('nmg, i, k: '+nmg+', '+i+', '+k);	
	        	if(nmg==0){
	        		i++;
	        		continue;
	        	}
	        	i--;
	        	j++;
	        	if(i<0){
	        		i=4;
	        	}
	        	if(j>4){
	        		j=0;
	        	}
	        }
	        var jason=[
		        {
		            a : a[0][0],
		            b : a[0][1],
		            c : a[0][2],
		            d : a[0][3],
		            e : a[0][4]
		        },
		        {
		        	a : a[1][0],
		            b : a[1][1],
		            c : a[1][2],
		            d : a[1][3],
		            e : a[1][4]
		        },
		        {
		        	a : a[2][0],
		            b : a[2][1],
		            c : a[2][2],
		            d : a[2][3],
		            e : a[2][4]
		        },
		        {
		        	a : a[3][0],
		            b : a[3][1],
		            c : a[3][2],
		            d : a[3][3],
		            e : a[3][4]
		        },
		        {
		        	a : a[4][0],
		            b : a[4][1],
		            c : a[4][2],
		            d : a[4][3],
		            e : a[4][4]
		        }
		    ];
			$('#tableRight').html(app.component.panelTable(jason,'Basic','default'));
		});
	};
	
	var matrix=function(){
		$('#matrix').on('click', function() {
			var wrapper=app.component.getWrapper();
			wrapper.empty();
	         wrapper.append(app.algorithm.TABLE);
	         var arr = [{id: 'basic', txt:'기본 5X5'},
	            {id: 'zigzag', txt:'지그재그'},
	            {id: 'diamond', txt:'다이아몬드'},
	            {id: 'sandGlass', txt:'모래시계'},
	            {id: 'snail', txt:'달팽이'},
	            {id: 'magicSquare', txt:'마방진'}];
	         var str = '';
	         $.each(arr, function(i,j){ //i: index값, j: 객체값 / jsp는 오버라이딩해서 안쓰는 파라미터가 있더라도 그 자리는 채워줘야한다.
	            str+='<li id="' + j.id + '" class="list-group-item"><a href="#">' + j.txt + '</a></li>';
	         });
	         var tableLeft = $('#tableLeft');
	         tableLeft.empty();
	         tableLeft.html(str);
	         var tableRight = $('#tableRight');   
	         tableRight.empty();
	         basic();
	         zigzag();
	         diamond();
	         sandGlass();
	         snail();
	         magicSquare();
		});
	};
	var math=function(){
		$('#math').on('click', function() {
			var wrapper=app.component.getWrapper();
			wrapper.empty();
			wrapper.append(app.algorithm.TABLE);
			var arr=[{id:'determinePrime', txt:'소수판별'}
				,{id:'primeSum', txt:'소수의 합'}
				,{id:'primeCount', txt:'소수의 개수'}
				,{id:'lcmGcm', txt:'최대공약수/최소공배수'}
				,{id:'euclid', txt:'유클리드(해야함)'}
				,{id:'factorization', txt:'약수구하기'}
				,{id:'primeFactor', txt:'소인수분해(해야함)'}
				,{id:'multiplSum', txt:'배수의 합'}
				,{id:'approx', txt:'근사값구하기'}];
			var str='';
			$.each(arr, function(i,j){
				str+='<li id="'+j.id+'" class="list-group-item"><a href="#">'+j.txt+'</a></li>';
			});
			var tableLeft = $('#tableLeft');
	         tableLeft.empty();
	         tableLeft.html(str);
	         var tableRight = $('#tableRight');   
	         tableRight.empty();
	         determinePrime();
	         primeSum();
	         primeCount();
	         lcmGcm();
	         factorization();
	         primeFactor();
	         multiplSum();
	         approx();
		});
	};
	
	/*소수판별: 어떤 수 X가 2부터 X-1까지 차례대로 나누어 떨어지는지 검사*/
	var determinePrime=function(){
		$('#determinePrime').on('click',function(){
			var a=randomGen(1);
			var result='소수';
			for(var i=2;i<a;i++){
				if(a%i==0){
					result='소수 아님';
				}
			}
			$('#tableRight').html('소수판별수: '+a+'<br>결과: '+result);
		});
	};
	
	/*소수의합: 숫자2부터 입력받은 수 X까지 증가시키며 각각 소수판별 후 소수만 합계에 누적*/
	var primeSum=function(){
		$('#primeSum').on('click',function(){
			var a=randomGen(1);
			var sum=0;
			var sumStr=[];
			var ch=1;
			for(var i=2;i<=a;i++){
				for(var j=2;j<i;j++){
					if(i%j==0){
						ch=0;
						break;
					}
				}
				if(ch==1){
					sum+=i;
					sumStr.push(i);
				}
				ch=1;
			}
			$('#tableRight').html('소수를 구할 숫자 범위의 한계: '+a+'<br>소수의 합 결과: '+sum+'<br>소수들: '+sumStr);
		});
	};
	
	/*소수의개수: 숫자2부터 입력받은 수 X까지 증가시키며 각각 소수판별 후 소수만 개수에 누적*/
	var primeCount=function(){
		$('#primeCount').on('click',function(){
			var a=randomGen(1);
			var count=0;
			var countStr=[];
			var ch=1;
			for(var i=2;i<=a;i++){
				for(var j=2;j<i;j++){
					if(i%j==0){
						ch=0;
						break;
					}
				}
				if(ch==1){
					count++;
					countStr.push(i);
				}
				ch=1;
			}
			$('#tableRight').html('소수를 구할 숫자 범위의 한계: '+a+'<br>소수의 개수 결과: '+count+'<br>소수들: '+countStr);
		});
	};
	
	/*최대공약수,최소공배수*/
	var lcmGcm=function(){
		$('#lcmGcm').on('click',function(){
			var a=randomGen(1);
			var b=randomGen(1);
			var big=(a>b)?a:b;
			var small=(a>b)?b:a;
			var gcm=0,lcm=0;
			var temp=0;
			while(true){
				if(big%small==0){
					gcm=small;
					lcm=a*b/gcm;
					break;
				}else{
					temp=big;
					big=small;
					small=temp%small;
				}
			}
			$('#tableRight').html('두 수: '+a+', '+b+'<br>최대공약수: '+gcm+'<br>최소공배수: '+lcm);
		});
	};
	/*약수구하기*/
	var factorization=function(){
		$('#factorization').on('click',function(){
			var a=[];
			var b=randomGen(1);
			for(var i=0;i<=b;i++){
				if(b%i==0){
					a.push(i);
				}
			}
			$('#tableRight').html('약수를 구할 수: '+b+'<br>약수: '+a);
		});
	};
	/*소인수분해*/
	var primeFactor=function(){
		$('#primeFactor').on('click',function(){
			var a=[]; //소인수 저장될 배열
			var b=4; //소인수분해할 숫자
			var c=-1; //소인수 저장할 배열 a의 위치를 지정해주는 변수
			var d=2; //제수가 저장될 변수
			var e=2; //b의 제곱근이 저장될 변수
			var mok=0; //b를 d로 나눈 몫이 저장될 변수
			var nmg=0 //b를 d로 나눈 나머지가 저장도리 변수
			var result='';
			while(1){
				e=Math.sqrt(b);
				console.log('e: '+e);
				while(1){
					if(d>e){
						d=b;
						break;
					}
					mok=b/d;
					nmg=b-mok*d;
					if(nmg==0){
						break;
					}else{
						d++;
					}
				}
				c++;
				a[c]=d;
				if(b==d){
					break;
				}
				b=mok;
			}
			for(i=0;i<=c;i++){
				result+=a[i]+' ';
			}
			$('#tableRight').html('소인수분해할 수: 5<br>소인수 결과: '+result);
		});
	};
	
	var multiplSum=function(){
		$('#multiplSum').on('click',function(){
			app.component.inputText('inputText').attr('placeholder', '배수를 구하고 싶은 수와 범위를 입력하세요.').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('결과보기').appendTo(tableRight).on('click', function() {
				var a=$('#inputText').val().split(" ")[0]*1;
				var b=$('#inputText').val().split(" ")[1]*1;
				var n=b/a;
				console.log('n:'+n);
				var sum=0;
				var sumStr=[];
				for(var i=1;i<=n;i++){
					sum+=a*i;
					sumStr.push(a*i);
				}
				$('#tableRight').html('배수를 구하고 싶은 수: '+a+'<br>범위: 1~'+b+'<br>결과: '+sum+'<br>'+sumStr);
			});
		});
	};
	
	var approx=function(){
		$('#approx').on('click',function(){
			app.component.inputText('inputText').attr('placeholder', '1~45사이의 숫자를 입력하세요').appendTo(tableRight);
			app.component.aButton('aButton','btn-primary').html('결과보기').appendTo(tableRight).on('click', function() {
				var a=$('#inputText').val()*1;
				var b=randomGen(10);
				var l=0;
				var j=44;
				var m=0;
				for(var i=0;i<b.length;i++){
					if(a>b[i]){
						l=a-b[i];
					}else{
						l=b[i]-a;
					}
					if(l<=j){
						j=l;
						m=b[i];
					}
				}
				$('#tableRight').html('입력한 숫자: '+a+'<br>10개의 수: '+b+'<br>가장 가까운 수: '+m);
			});
		});
	};
	
	var appl=function(){
		$('#application').on('click', function() {
			app.component.wrapper.empty();
			app.component.inputText('inputText').attr('placeholder', 'limit').appendTo(wrapper);
			app.component.aButton('aButton','btn-primary').html('응용').appendTo(wrapper).on('click', function() {
				aSeries(inputText.val());
			});
		});
	};
	return {
		init: init,
		aSeries: aSeries,
		swSeries: swSeries,
		dSeries: dSeries,
		factorial: factorial,
		fibonacci: fibonacci,
		series: series,
		selectSort: selectSort,
		bubbleSort: bubbleSort,
		insertSort: insertSort,
		randomGen: randomGen,
		horizontalTable: horizontalTable,
		arr: arr,
		basic: basic,
		zigzag: zigzag,
		diamond: diamond,
		sandGlass: sandGlass,
		snail: snail,
		magicSquare: magicSquare,
		matrix: matrix,
		math: math,
		lcmGcm: lcmGcm,
		factorization: factorization,
		primeFactor: primeFactor,
		multiplSum: multiplSum,
		approx: approx,
		appl: appl
	};
})();

app.oop=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		encap();
	};
	var encap=function(){
		$('#Encap').on('click',function(){
			var wrapper=app.component.getWrapper();
			wrapper.empty();
			$('#tableLeft').empty();
			$('#tableRight').empty();
			wrapper.append(app.algorithm.TABLE);
			$('#tableLeft').html(app.oop.OOP_MENU);
			app.component.inputText('inputText1').attr('placeholder','이름').appendTo($('#tableRight'));
			app.component.inputText('inputText2').attr('placeholder','나이').appendTo($('#tableRight'));
			app.component.inputText('inputText3').attr('placeholder','성별').appendTo($('#tableRight'));
			app.component.inputText('inputText4').attr('placeholder','직업').appendTo($('#tableRight'));
			app.component.aButton('aButton','btn-primary').html('완료').appendTo($('#tableRight')).on('click',function(){
				app.person.setName($('#inputText1').val());
				app.person.setAge($('#inputText2').val());
				app.person.setGen($('#inputText3').val());
				app.person.setJob($('#inputText4').val());
				var spec=app.person.toString();
				$('#tableRight').empty();
				app.component.divAlert().html('정보<br>'+spec).appendTo($('#tableRight'));
				
			});
		});
	};
	var setContentView=function(){};
	return {
		init: init,
		encap: encap,
		inherit: function(){},
		poly: function(){}
	};
})();
/*person*/
app.person=(function(){
	var wrapper,ctx,img,js,css;
	var init=function(){
		wrapper=app.component.getWrapper();
		ctx=app.session.getContextPath();
		img=app.session.getImagePath();
		js=app.session.getJavaScriptPath();
		css=app.session.getStylePath();
		$('#brand').on('click',function(){
			alert('brand click');
		});
		$('#wrapper').load(ctx+'/permission/form');
	};
	return {
		init: init
	};
})();



app.info=(function(){
	var _name,_age,_gen,_job;
	return {
		setName: function(name){this._name=name},
		setAge:function(age){this._age=age},
		setGen: function(gen){this._gen=gen},
		setJob: function(job){this._job=job},
		getName: function(){return this._name;},
		getAge: function(){return this._age;},
		getGen: function(){return this._gen;},
		getJob: function(){return this._job;},
		toString: function(){
			return this._name+", "+this._age+", "+this._gen+", "+this._job;
		}
	};
})();
/*
========= app-bbs ====
@AUTHOR : yheisun@gmail.com
@CREATE DATE : 2017-4-21
@UPDATE DATE : 2017-4-21
@DESC : 게시판
==============================
*/
app.bbs=(function(){
	var init=function(){
		$('#bbs').on('click',function(e){
			e.preventDefault();
			$('#wrapper').html(app.ui.searchWindowOnArticles());
			//170424
			app.bbs.articles(1);
		   });
	};
	var articles=function(x){
		var ctx=app.session.getContextPath();
		$('#wrapper').append(app.ui.articleTable());
		var $thead=$('#thead');
		var $tbody=$('#tbody');
		var $count=$('#count');
		var $pagination=$('#pagination');
		var $searchWindowOnArticles=$('#searchWindowOnArticles');
		$thead.remove();
		$tbody.empty();
		$count.empty();
		$pagination.remove();
		$.getJSON(ctx+'/list/bbs/'+x,function(data){
			var theNumberOfArticles=data.count;
			var row='';
			$.each(data.list,function(i,item){
				row+='<tr>'
				+'<td>'+(i+1)+'</td>'
				+'<td><a href="#">'+item.title+'</a></td>'
				+'<td>'+item.writerId+'</td>'
				+'<td>'+item.regDate+'</td>'
				+'<td>'+item.readCount+'</td>'
				+'</tr>'
			});
			$('#tbody').html(row);
			$('#count').text('게시글 수: '+data.count);
			var pagination='<nav id="pagination" aria-label="Page navigation" align="center"><ul class="pagination">';
			var $table=$('#table');
			var $pagination=$('#pagination');
			
			
			//////////////////////////////////////////////////////
			var temp='';
			// 170424
	          if(data.prevBlock > 0){
	          temp += '<li><a href="'+ctx+'/list/bbs/'+data.prevBlock+'">◀prev</a></li>';
	          }
	          for(var i=data.blockStart; i<=data.blockEnd; i++){
		         temp += '<li>';
		         if(i==data.pageNo){
		             temp += '<a href="#"><font>'+i+'</font></a>';
		         } else {
		             temp += '<a href="#" onclick="app.bbs.articles('+i+')">'+i+'</a>';
		         }
		         temp += '</li>';
	          }
	          if(data.nextBlock<=data.pageCount){
	          temp+='<li><a href="'+ctx+'/list/bbs/'+data.nextBlock+'">next▶</a></li>'
	          }
	          pagination += temp;
	          pagination += '</ul></nav></div></div>';
	          $('#wrapper').append(pagination);
	          
	          var $articleList=$('#table');
	          var $pagination=$('#pagination');
	          $('#container').addClass('width_full_size');
	          $('#container>div').addClass('margin_center').css('width','500px');
	          $articleList.addClass('table_default').addClass('margin_center').css('width','500px');
	          $pagination.css('"width','500px').css('margin','0 auto').css('text-align','center');
	          $pagination.find('a').css('text-decoration','none');
	          $pagination.find('li').css('text-align','center').css('width','38px').css('display','inline');
	          $pagination.find('font').css('color','red');
	      });
	};
	return{
		init: init,
		articles : articles
	};
})();



/*************************************************************************************
 * View
 * app.component=(function(){   //부품공장
 * app.navi=(function(){   //common 네비게이션
 * app.patient=(function(){  //환자 네비게이션
 *************************************************************************************/
app.component=(function(){
	var _body,_wrapper;
	var setBody=function(body){this._body=body;}
	var getBody=function(){return this._body;}
	var setWrapper=function(wrapper){this._wrapper=wrapper;}
	var getWrapper=function(){return this._wrapper;}
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		app.component.setWrapper($('#wrapper'));
		app.component.setBody($('body'));
	};
	return{
		init: init,
		setBody: setBody,
		getBody: getBody,
		setWrapper: setWrapper,
		getWrapper: getWrapper,
	    div: function(id){
	    	return $(id);
	    },
	    /*app-component-button*/
	    aButton: function(id,type){
	    	return $('<a id="'+id+'" href="#" class="btn '+type+'" role="button">Button</a>');
	    },
	    bButton: function(id,type){
	    	return $('<button id="'+id+'" type="button" class="btn '+type+'">Button</button>');
	    },
	    btnRegister: function(name){
	    	return $('<div class="form-group">'
					+'<div class="row">'
					+'<div class="col-sm-6 col-sm-offset-3">'
					+'<input type="submit" name="'+name+'" id="'+name+'" tabindex="4" class="form-control btn btn-register" value="Register Now">'
					+'</div>'
					+'</div>'
					+'</div>');
	    },
	    radioBtn: function(id,name,value,html){
	    	return $('<label class="radio-inline">'
					+'<input id="'+id+'" type="radio" name="'+name+'" value="'+value+'">'+html
					+'</label>');
	    },
	    /*app-component-input*/
	    inputText: function(id){
	    	return $('<input id="'+id+'" type="text" class="form-control" placeholder="example" aria-describedby="basic-addon1">');
	    },
	    inputRegister: function(type,name,placeholder){
	    	return $('<div class="form-group">'
	    			+'<input type="'+type+'" name="'+name+'" id="'+name+'" tabindex="1" class="form-control" placeholder="'+placeholder+'">'
	    			+'</div>');
	    },
	    inputButton: function(type,name,value){
	    	return $('<div class="form-group">'
	    			+'<input type="'+type+'" name="'+name+'" id="'+name+'" tabindex="1"  class="btn-confirm" value="'+value+'">'
	    			+'</div>');
	    },
	    /*app-component-alert*/
	    divAlert: function(type){
	    	return $('<div class="alert '+type+'" role="alert">example</div>');
	    },
	    /*app-component-list*/
	    horList: function(arr,i){
	    	var type='';
	    	switch(i){
	    	case 'default': type='btn-default'; break;
	    	}
	    	var list='<div class="btn-group" role="group" aria-label="...">';
	    	$.each(arr,function(i,j){
	    		list+='<button id="list-button-"'+i+' type="button" class="btn "'+type+'">'+arr[i]+'</button>';
	    	});
	    	list+='</div>';
	    	return list;
	    },
	    /*app-component-table*/
	    panelTable: function(json,txt,type){
	    	var table=
	    		'<div class="panel panel-'+type+'">'
	    		+'<div class="panel-heading">행렬</div>'
	    		+'<table id="table">'
	    		+'<tr>'
	    		+'<th colspan="5">'+txt+'</th>'
	    		+'</tr>'
	    		+'<tbody>';
	    	$.each(json, function(i,j){
	    		table+='<tr><td style="width:20%">'+j.a+'</td><td style="width:20%">'+j.b+'</td><td style="width:20%">'+j.c+'</td><td style="width:20%">'+j.d+'</td><td style="width:20%">'+j.e+'</td></tr>';
	    	});
	    	table+='</tbody></table>';
	    	return table;
	    }
	};
})();

app.permission=(function(){
		var execute=function() {
			login();
		var ctx=app.session.getContextPath();
		
	    $('#login-form-link').on('click',function(e) {
			$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		$('#register-form-link').on('click',function(e) {
			$("#register-form").delay(100).fadeIn(100);
	 		$("#login-form").fadeOut(100);
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
			$('#common-info').empty();
			$('#incommon-info').empty();
			app.component.inputRegister('text','id','id').appendTo('#common-info');
			app.component.inputRegister('password','pass','password').appendTo('#common-info');
			app.component.inputRegister('password','confirm-pass','confirm password').appendTo('#common-info');
			app.component.inputButton('button','btn-confirm','확인').appendTo('#common-info');
			app.component.inputRegister('text','name','name').appendTo('#common-info');
			app.component.radioBtn('gen-M','gen','male','M').appendTo('#common-info');
			app.component.radioBtn('gen-F','gen','female','F').appendTo('#common-info');
			app.component.inputRegister('text','phone','phone').appendTo('#common-info');
			app.component.inputRegister('text','email','email').appendTo('#common-info');
			app.component.inputRegister('text','job','job').appendTo('#incommon-info');
			app.component.inputRegister('text','jumin','birth').appendTo('#incommon-info');
			app.component.inputRegister('text','addr','address').appendTo('#incommon-info');
			app.component.btnRegister('register-patient').appendTo('#incommon-info');
			$('#register-patient').on('click',function(e){
				e.preventDefault();
				var _id=$('#id').val();
				var _pass=$('#pass').val();
				var _name=$('#name').val();
				var _addr=$('#addr').val();
				var _jumin=$('#jumin').val();
				var _job=$('#job').val();
				var _gen=$('#gen-M').checked ? 'M' : 'F';
				if(app.util.validation(_id)&&app.util.validation(_pass)&&app.util.validation(_name)&&app.util.validation(_addr)&&app.util.validation(_jumin)&&app.util.validation(_job)&&app.util.validation(_gen)){
					var json={
							id: _id,
							pass: _pass,
							name: _name,
							phone: $('#phone').val(),
							gen: _gen,
							addr: _addr,
							email: $('#email').val(),
							jumin: _jumin,
							job: _job
					};
					$.ajax({
						url: ctx+"/post/patient",
						method: "POST",
						data: JSON.stringify(json),
						dataType: "json",
						contentType: 'application/json',
						success: function(data){
							alert(data.name+'님 회원가입 축하드립니다.');
							$("#login-form").delay(100).fadeIn(100);
					 		$("#register-form").fadeOut(100);
							$('#register-form-link').removeClass('active');
							$(this).addClass('active');
						},
						error: function(a,b,msg){
							alert('회원가입 실패 이유:'+msg);
						}
					});
				}else{
					alert('반드시 입력될 값이 비었습니다.')
				}
				
			});
			$('#radioPat').on('click',function(e){
				e.preventDefault();
				$('#incommon-info').empty();
				app.component.inputRegister('text','job','job').appendTo('#incommon-info');
				app.component.inputRegister('text','jumin','birth').appendTo('#incommon-info');
				app.component.inputRegister('text','addr','address').appendTo('#incommon-info');
				app.component.btnRegister('register-patient').appendTo('#incommon-info');
				$('#register-patient').on('click',function(e){
					e.preventDefault();
					var _id=$('#id').val();
					var _pass=$('#pass').val();
					var _name=$('#name').val();
					var _addr=$('#addr').val();
					var _jumin=$('#jumin').val();
					var _job=$('#job').val();
					var _gen=$('#gen-M').checked ? 'M' : 'F';
					if(app.util.validation(_id)&&app.util.validation(_pass)&&app.util.validation(_name)&&app.util.validation(_addr)&&app.util.validation(_jumin)&&app.util.validation(_job)&&app.util.validation(_gen)){
						var json={
								id: _id,
								pass: _pass,
								name: _name,
								phone: $('#phone').val(),
								gen: _gen,
								addr: _addr,
								email: $('#email').val(),
								jumin: _jumin,
								job: _job
						};
						$.ajax({
							url: ctx+"/post/patient",
							method: "POST",
							data: JSON.stringify(json),
							dataType: "json",
							contentType: 'application/json',
							success: function(data){
								alert(data.name+'님 회원가입 축하드립니다.');
								$("#login-form").delay(100).fadeIn(100);
						 		$("#register-form").fadeOut(100);
								$('#register-form-link').removeClass('active');
								$(this).addClass('active');
							},
							error: function(a,b,msg){
								alert('회원가입 실패 이유:'+msg);
							}
						});
					}else{
						alert('반드시 입력될 값이 비었습니다.')
					}
					
				});
			});
			$('#radioDoc').on('click',function(e){
				e.preventDefault();
				$('#incommon-info').empty();
				app.component.inputRegister('text','major-treat','major treat').appendTo('#incommon-info');
				app.component.inputRegister('text','position','position').appendTo('#incommon-info');
				app.component.btnRegister('register-doctor').appendTo('#incommon-info');
				$('#register-doctor').on('click',function(e){
					alert('버튼 클릭 password:'+$('#pass').val());
					e.preventDefault();
					var _id=$('#id').val();
					var _pass=$('#pass').val();
					var _name=$('#name').val();
					var _email=$('#email').val();
					var _major=$('#major-treat').val();
					var _position=$('#position').val();
					var _gen=$('#gen-M').checked ? 'M' : 'F';
					alert('gen:' + _gen)
					if(app.util.validation(_id)&&app.util.validation(_pass)&&app.util.validation(_name)&&app.util.validation(_email)&&app.util.validation(_major)&&app.util.validation(_position)&&app.util.validation(_gen)){
						var json={
								id: _id,
								pass: _pass,
								name: _name,
								phone: $('#phone').val(),
								gen: _gen,
								email: _email,
								major: _major,
								position: _position
						};
						$.ajax({
							url: ctx+"/post/doctor",
							method: "POST",
							data: JSON.stringify(json),
							dataType: "json",
							contentType: 'application/json',
							success: function(data){
								alert(data.name+'님 회원가입 축하드립니다.');
								location.reload();
							},
							error: function(a,b,msg){
								alert('회원가입 실패 이유:'+msg);
							}
						});
					}else{
						alert('반드시 입력될 값이 비었습니다.')
					}
					
				});
			});
			$('#radioNur').on('click',function(){
				e.preventDefault();
				$('#incommon-info').empty();
				app.component.inputRegister('text','major-job','major job').appendTo('#incommon-info');
				app.component.inputRegister('text','position','position').appendTo('#incommon-info');
				app.component.btnRegister('register-nurse').appendTo('#incommon-info');
				$('#register-nurse').on('click',function(e){
					alert('버튼 클릭 password:'+$('#pass').val());
					e.preventDefault();
					var _id=$('#id').val();
					var _pass=$('#pass').val();
					var _name=$('#name').val();
					var _major=$('#major-job').val();
					var _position=$('#position').val();
					var _gen=$('#gen-M').checked ? 'M' : 'F';
					alert('gen:' + _gen)
					if(app.util.validation(_id)&&app.util.validation(_pass)&&app.util.validation(_name)&&app.util.validation(_major)&&app.util.validation(_position)&&app.util.validation(_gen)){
						var json={
								id: _id,
								pass: _pass,
								name: _name,
								phone: $('#phone').val(),
								gen: _gen,
								email: $('#email').val(),
								major: _major,
								position: _position
						};
						$.ajax({
							url: ctx+"/post/nurse",
							method: "POST",
							data: JSON.stringify(json),
							dataType: "json",
							contentType: 'application/json',
							success: function(data){
								alert(data.name+'님 회원가입 축하드립니다.');
								$("#login-form").delay(100).fadeIn(100);
						 		$("#register-form").fadeOut(100);
								$('#register-form-link').removeClass('active');
								$(this).addClass('active');
							},
							error: function(a,b,msg){
								alert('회원가입 실패 이유:'+msg);
							}
						});
					}else{
						alert('반드시 입력될 값이 비었습니다.')
					}
					
				});
			});
			$('#radioAdmin').on('click',function(){
			});
			
		});
		$('#register-admin').on('click',function(e){
			e.preventDefault();
			$.ajax({
				url: ctx+"/post/admin",
				method: "POST"
				
			});
		});
	};
	var emailcheck=function(strValue){
		var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
		if(strValue.lenght == 0)
		{return false;}
		if (!strValue.match(regExp))
		{return false;}
		return true;
	};
	var login=function(){
		var context=app.session.getContextPath();
		console.log('app.login context: '+context);
		var authId=$.cookie('authId');
		if(authId!=undefined){
			$('#username').val(authId);
			$('#remember').prop("checked",true);
		}
		$('#login-submit').on('click',function(e){
			if($.trim($("#username").val()) == ""){
	            alert("아이디를 입력하세요");
	            return;
	        }else{
	        	var checked=$("#remember").prop("checked");
	            if(checked){
	                $.cookie('authId', $("#username").val());
	            }else{
	                $.removeCookie("username");
	            }
				e.preventDefault();//default를 사용하지 않겠다.
				
				$.ajax({
					 url: context+"/login",
					 method: "POST",
					 data: JSON.stringify({ 
						 id : $('#username').val(), 
						 password: $('#password').val()
					 }), 
					 dataType: "json",
					 contentType: 'application/json',
					 success: function(data){
						 if(data.group==='fail'){
							 alert('존재하지않는 ID입니다.');
						 }else{						 
							 alert(data.patient.name+'님 환영합니다.');
							 $('#boot-nav').remove();
							 $('#wrapper').html(app.ui.patientGnb());
							 $('#wrapper').append(app.ui.patientDetail());
							 var profileArr = app.util.calcProfile(data.patient.jumin);
		                     var birth = profileArr[0], age = profileArr[1], gender = profileArr[2];
							 $('#name').text(data.patient.name);
							 $('#job').text(data.patient.job);
							 $('#birth').text(birth);
							 $('#gen').text(gender);
							 $('#age').text(age+' / 80kg');
							 $('#phone').text(data.patient.phone);
							 $('#addr').text(data.patient.addr);
							 $('#docName').text(data.docName);
							 var id=(checked)?$.cookie('authId'):$('#username').val();
							 $('#btn-default').on('click',function(e){
								 e.preventDefault();
								 $('#wrapper').html(app.ui.patientGnb());
								 $.ajax({
									 url:context+'/chart',
									 method:'POST',
									 data:JSON.stringify({
										 id: id
									 }),
									 dataType:'json',
									 contentType:'application/json',
									 success:function(data){
										 if(data.result==='fail'){
											 $('<div><h1 id="msg"></h1></div>').attr('id','chart-free').appendTo('#wrapper');
											 $('#chart-free').css('width','80%').css('margin-top','50px').addClass('app-margin-center');
											 $('#msg').text('등록된 차트가 없습니다.');
										 }else{
											 alert(data.list);
											 var profileArr = app.util.calcProfile(data.chart.jumin);
						                     var birth = profileArr[0], age = profileArr[1], gender = profileArr[2];
											 $('#wrapper').append(app.ui.chart());
											 $('#name').text(data.chart.name);
											 $('#job').text(data.chart.job);
											 $('#birth').text(birth);
											 $('#gen').text(gender);
											 $('#age').text(age+' / 80kg');
											 $('#phone').text(data.chart.phone);
											 $('#addr').text(data.chart.addr);
											 $('#docName').text(data.chart.doctorName);
											 //
											 $("<div></div>").attr('id','app-chart-bottom').appendTo('#app-chart-center');
											 var chartList='<table><thead id="thead">';
											var row = '<tr>';
											var arr=['순서','진료일','진료 NO','담당의사','직책','진료과목','병명','처방내역'];
											for(var i=0;i<8;i++){
												row+='<th style="border: 1px solid black">'+arr[i]+'</th>';
											}
											row+='</tr></thead></tbody id="tbody">';
											chartList+=row;
											row='';
											$.each(data.list,function(i,chart){
												row+='<tr>'
													+'<td style="border:1px solid black">'+(i+1)+'</td>'
													+'<td style="border:1px solid black">'+chart.treatmentId+'</td>'
													+'<td style="border:1px solid black">'+chart.treatDate+'</td>'
													+'<td style="border:1px solid black">'+chart.doctorName+'</td>'
													+'<td style="border:1px solid black">'+chart.doctorPosition+'</td>'
													+'<td style="border:1px solid black">'+chart.doctorMajor+'</td>'
													+'<td style="border:1px solid black">'+chart.chartContents+'</td>'
													+'<td style="border:1px solid black">'+chart.treatContents+'</td>'
											});
											chartList+=row;
											chartList+='</tbody></table>';
											$('.row').css('border','1px solid black').addClass('app-text-center');
											$(chartList).attr('id','chart-list')
											.css('margin-top','20px').addClass('app-chart-bottom-table')
											.appendTo('#app-chart-bottom');
											var chartId=data.chart.chartId;
											var ctx=app.session.getContextPath();
											$('#btn-file-upload').on('click',function(e){
												e.preventDefault();
												alert('#######'+$('#form').attr('action'));
												$.ajax({
													url: ctx+"/post/chart/id",
													method: "POST",
													data: JSON.stringify({
														chartId: chartId
													}),
													dataType: "json",
													contentType: 'application/json',
													success: function(data){
														alert('chart id 보내기 '+data.chartResult);
														$('form').ajaxForm({
															url: '/web/post/chart/image',
															dataType: 'text',
															enctype: 'multipart/form-data',
															beforeSubmit:function(){
																alert('로딩화면!');
															},
															success:function(data){
																alert('등록완료!'+data.chartResult);
															},
															error:function(a,b,m){
																alert('등록실패 이유:'+m);
															}
														});
														$('#form').submit();
													},
													error: function(a,b,msg){
														alert('chart id 보내기 실패 이유:'+msg);
													}
												});
												
											});
										 }
									 },
									 error:function(xhr,status,msg){alert(msg);}
								 });
							 });
						 }
					 },
					 error: function(xhr,status,msg){
						 alert('로그인 실패이유:'+msg);
					 }
				});
	        }
		});
		
	};
	return{
		execute: execute,
		emailcheck: emailcheck,
		login: login};
})();

app.navi=(function(){})();

/*
========= app-ui ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC : 
==============================
*/
app.ui={
		algorithmArrayTable : function(){
			return '<div class="row">'
		    +'<div class="col-sm-12">'
		    +'<div class="panel colourable">'
		    +'<div class="panel-heading">'
		    +'<span class="panel-title">IDC 2D Map</span>'
		    +'</div>'
		    +'<div class="panel-body">'
		    +    '<div class="init-table">'
		    +        '<span>Make Map</span>'
		    +        '<input type="text" id="mRow" placeholder="가로 행">'
		    +        '<input type="text" id="mCol" placeholder="세로 열">'
		    +        '<button type="submit" class="tc-btn btn btn-default">Create</button>'
		    +    '</div>'
		    +    '<div class="control-box" style="display: none;">'
		    +        '<span class="btn mRow-add">가로 행 추가 <i class="fa fa-plus"></i></span>'
		    +        '<span class="btn mRow-del">가로 행 제거 <i class="fa fa-minus"></i></span>'
		    +        '<span class="btn mCol-add">세로 열 추가 <i class="fa fa-plus"></i></span>'
		    +        '<span class="btn mCol-del">세로 열 제거 <i class="fa fa-minus"></i></span>'
		    +    '</div>'
		    +    '<div class="show-map text-center" style="padding-top: 15px;"><span>Not exist map. first, create map.</span></div>'
		    +'</div>'
		    +'</div>'
		    +'</div>'
		    +'</div>';
		},
		algorithmTable : function(){
			return '<table id="table" style="width:800px;height:300px;border-collapse: collapse;border: 1px solid black;margin:0 auto">'
			+	'<tr style="border: 1px solid black;">'
			+		'<td id="tableLeft" style="width: 50%;border: 1px solid black;"></td>'
			+		'<td id="tableRight" style="width: 50%;border: 1px solid black;"></td>'
			+	'</tr>'
			+'</table>';
		},
		algorithmSeriesMenu : function(){
			return '<ul class="list-group">'
			+	'<li id="aSeries" class="list-group-item"><a href="#">등차수열 합</a></li>'
			+	'<li id="swSeries" class="list-group-item"><a href="#">스위치수열 합</a></li>'
			+	'<li id="dSeries" class="list-group-item"><a href="#">계차수열 합</a></li>'
			+	'<li id="factorial" class="list-group-item"><a href="#">팩토리얼수열 합</a></li>'
			+	'<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열 합</a></li>'
			+'</ul>';
		},
		oopMenu : function(){
			return '<ul class="list-group">'
			+	'<li id="encap" class="list-group-item"><a href="#">캡슐화</a></li>'
			+	'<li id="inherit" class="list-group-item"><a href="#">상 속</a></li>'
			+	'<li id="poly" class="list-group-item"><a href="#">다형성</a></li>'
			+'</ul>';
		},
		patientGnb : function(){
			
		    	   var gnb = '<div style="position: relative; "><ul id="app-gnb" class="app-gnb" >';
		    	   var arr = ['home/홈으로','mypage/MY PAGE','treatlist/나의 진료기록','board/게시판','customer/고객참여마당','main/로그아웃'];
		    	   for(var i=0; i<6; i++){
		    		   gnb+='<li><a href="'+arr[i].split("/")[0]+'">'+arr[i].split("/")[1]+'</a></li>'   
		    	   }
				   gnb += '</ul></div>';
			return gnb;
		},
		patientDetail : function(){
			var image = app.session.getImagePath();
			var detail=
			'<div class="app-patient-detail">'
			+     '<table id="app-table" class="app-table" >'
			+          '<tr style="text-align: left;">'
			+                 '<td colspan="5"><h3> 마이페이지</h3></td>'
			+           '</tr><tr>'
			+                '<td style="width: 100px" rowspan="5"><img src="'+image+'/common/defaultimg.jpg" alt="" /></td>'
			+                '<td style="width: 100px" >이름</td>'
			+                 '<td id="name" style="width: 150px"></td>'
			+                 '<td style="width: 100px">직업</td>'
			+                 '<td  id="job" style="width: 150px"></td></tr>'
			+ 			'<tr><td>생년월일</td>'
			+                 '<td id="birth" ></td>'
			+                 '<td>키</td>'
			+                 '<td> 180cm</td></tr><tr>'
			+                 '<td>성별</td>'
			+                 '<td id="gen" ></td>'
			+                 '<td>나이/몸무게</td>'
			+                 '<td id="age"></td>'
			+           '</tr>'
			+           '<tr>'
			+                 '<td>전화번호</td>'
			+                 '<td id="phone" ></td>'
			+                 '<td>혈액형</td>'
			+                 '<td> A형 </td>'
			+           '</tr>'
			+           '<tr>'
			+                 '<td>주소</td>'
			+                 '<td id="addr" ></td>'
			+                 '<td>주치의</td>'
			+                 '<td id="docName" >'
			+					'<a onclick="docDetail()" href="#"> 한석규</a>'
			+                 '</td>'
			+           '</tr>'
			+     '</table>'
			+     '<input type="button" style="margin-top:20px" id="btn-default" class="btn btn-default" value="차트보기"/>'
			+'</div>'
			return detail;
		},
		chart : function(){
			var context=app.session.getContextPath();
			var image = app.session.getImagePath();
			$("<div></div>").attr('id','div-chart').appendTo('#wrapper');
			$('#div-chart').css('width','80%').css('margin-top','50px').addClass('app-margin-center');
			$("<div></div>").attr('id','app-chart-top').appendTo('#div-chart');
			
			var table=
				'<table>'
				+'<tr><td rowspan="5" style="width:100px">환<br/>자<br/>정<br/>보</td><td class="app-chart-table-elem">이름</td><td id="name" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">나이</td><td id="age" class="app-chart-top-table"></td></tr>'
				+'<tr><td class="app-chart-table-elem">생년월일</td><td id="birth" class="app-chart-top-table"></td><td class="app-chart-col-table">키</td><td class="app-chart-top-table">180cm</td><td class="app-chart-table-elem">직업</td><td id="job" class="app-chart-top-table"></td></tr>'       
				+'<tr><td class="app-chart-table-elem">성별</td><td id="gen" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">몸무게</td><td class="app-chart-top-table">80kg</td></tr>'
			    +'<tr><td class="app-chart-table-elem">전화번호</td><td id="phone" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">혈액형</td><td class="app-chart-top-table">AB형</td></tr>'
			    +'<tr><td class="app-chart-table-elem">주소</td><td id="addr" colspan="3" class="app-chart-top-table"></td><td class="app-chart-table-elem">주치의</td><td id="docName" class="app-chart-top-table"></td></tr>'
				+'</table>';			 
			$(table).attr('id','app-chart-top-table').appendTo('#app-chart-top');
			$('#app-chart-top-table').css('width','800px');
			$('#app-chart-top').addClass('app-chart-top').css('text-align','center');
			$("<div></div>").attr('id','app-chart-center').appendTo('#app-chart-top');
			$('#app-chart-center').addClass('app-chart-center');
			var fileUpload='<form id="form" name="form" method="post" action="/post/chart/image" enctype="multipart/form-data">'+
			'<input type="file" id="file" name="file"/>'+
			'<input type="submit" id="btn-file-upload" value="파일업로드"/></form>'
			$('#app-chart-center').html(
				'<div class="app-chart-center-center">처방전'+
			        '<br/>'+
			        '<img src="'+image+'/common/defaultimg.jpg" style="width:200px; height:200px;float:left"/>'+
			    '</div>	'+fileUpload);
			$('#form-file-upload').css('margin-top','20px');
		},
		searchWindowOnArticles: function(){
			var x='<div id="searchWindow" style="margin: 0 auto; width:300px;margin-bottom:30px;">'
				+'<div>'
				+'<select name="property" name="property">'
				+'<option value="id">작성자</option>'
				+'<option value="title">제목</option>'
				+'</select>'
				+'<input type="text" name="searchKeyword"/>'
				+'<input type="button" value="검색"/>';
			return x;
		},
		articleTable: function(){
			var x='<table id="table"><thead id="thead">'
				+'<tr>'
				+'<td id="count">총게시글수: </td>'
				+'</tr>'
				+'<tr>'
				+'<th>번호</th>'
				+'<th>제목</th>'
				+'<th>작성자</th>'
				+'<th>날짜</th>'
				+'<th>조회수</th>'
				+'</tr></thead><tbody id="tbody"></table>';
			return x;
		},
		bbs: function(){
			var bbs='<div id="searchWindow">'
				+'<div>'
				+'<select name="property" name="property">'
				+'<option value="id">작성자</option>'
				+'<option value="title">제목</option>'
				+'</select>'
				+'<input type="text" name="searchKeyword"/>'
				+'<input type="button" value="검색"/>'
				+'<table id="table"><thead id="thead">'
				+'<tr>'
				+'<td id="count">총게시글수: </td>'
				+'</tr>'
				+'<tr>'
				+'<th>번호</th>'
				+'<th>제목</th>'
				+'<th>작성자</th>'
				+'<th>날짜</th>'
				+'<th>조회수</th>'
				+'</tr></thead><tbody id="tbody">';
				
			var pagination='<nav id="pagination" aria-label="Page navigation" align="center"><ul class="pagenation">'
				//if문
				+'<c:if test="${requestScope.prevBlock gt 0}">'
					+'<a href="${context}/board.do?action=list&page=articleList&pageNO=${requestScope.prevBlock}">◀prev</a>'
				+'</c:if>'
				//for문
				+'<c:forEach begin="${requestScope.blockStart}" end="${requestScope.blockEnd}" step="1" varStatus="i">'
					+'<li>'
					+'<c:choose>'
						+'<c:when test="${i.index eq pageNO}">'
							+'<a href="#"><font>${i.index}</font></a>'
						+'</c:when>'
						+'<c:otherwise>'
							+'<a href="${context}/board.do?action=list&page=articleList&pageNO=${i.index}">${i.index}</a>'
						+'</c:otherwise>'
					+'</c:choose>'
					+'</li>'
				+'</c:forEach>'
				//if문
				+'<c:if test="${requestScope.nextBlock le pageCount}">'
					+'<a href="${context}/board.do?action=list&page=articleList&pageNO=${requestScope.nextBlock}">next▶</a>'
				+'</c:if>'
				+'</ul>'
				+'</nav>'
				+'</div>'
				+'</div>';
				var $articleList=$('#table');
				var $pagination=$('#pagination');
				$('#container').addClass('width_full_size');
				$('#container>div').addClass('margin_center').css('width','500px');
				$articleList.addClass('table_default').addClass('margin_center').css('width','500px').css('height','180px');
				$pagination.css('"width','500px').css('margin','0 auto').css('text-align','center');
				$pagination.find('a').css('text-decoration','none');
				$pagination.find('li').css('text-align','center').css('width','38px').css('display','inline');
				$pagination.find('font').css('color','red');
				return bbs;
			
		}
};

app.util={
	validation: function(x){
		return (x!="");
	},
	calcProfile : function(ssn) {
	    var arr = [];
	    var date = app.util.datetime();
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

app.algorithm.TABLE='<div style="width:100%">'
	+'<table style="margin: 0 auto; width:500px; height:300px; border-collapse: collapse; border: 1px solid black;">'
	+'<tr><td id="tableLeft" style="width:50%; border: 1px solid black;"></td>'
	+'<td id="tableRight"></td></tr></table></div>';
app.algorithm.SERIES_MENU='<ul class="list-group">'
	+ '<li id="aSeries" class="list-group-item"><a href="#">등차수열</a></li>'
	+ '<li id="swSeries" class="list-group-item"><a href="#">스위치수열</a></li>'
	+ '<li id="dSeries" class="list-group-item"><a href="#">계차수열</a></li>'
	+ '<li id="factorial" class="list-group-item"><a href="#">팩토리얼수열</a></li>'
	+ '<li id="fibonacci" class="list-group-item"><a href="#">피보나치수열</a></li></ul>';
app.algorithm.ARRAY_MENU='<ul class="list-group">'
	+ '<li id="selectSort" class="list-group-item"><a href="#">선택정렬</a></li>'
	+ '<li id="bubbleSort" class="list-group-item"><a href="#">버블정렬</a></li>'
	+ '<li id="insertSort" class="list-group-item"><a href="#">삽입정렬</a></li></ul>';
app.oop.OOP_MENU='<ul class="list-group">'
	+ '<li id="selectSort" class="list-group-item"><a href="#">캡슐화</a></li>'
	+ '<li id="bubbleSort" class="list-group-item"><a href="#">상속</a></li>'
	+ '<li id="insertSort" class="list-group-item"><a href="#">다형성</a></li></ul>';




/*************************************************************************************
 * Controller
 * app.controller=(function(){
 *************************************************************************************/
app.controller=(function(){})();
	
	
	
	
	
	
	