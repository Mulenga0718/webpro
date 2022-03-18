/**
 *  람다 함수 : => 를 이용하는 함수 
 	proc3 = (매개변수) => { }
 */
 function proc1(){
	//1~10 합
	var sum=0;
	for(let i=1; i<=10; i++){
		sum += i;	
	}
	document.querySelector('#result1').innerHTML = sum;
}
 function proc2(){
	//1~100짝수합
	var sum=0;
	for(let i =1; i<=100; i++){
		if(i%2 == 1) 
			continue;
			sum += i;
	}
	document.querySelector('#result2').innerHTML = sum;
}
 proc3 = () => {
 	var sum =0;
 	var str ="";
 	while(true){
	num = parseInt(prompt('숫자를 입력하십시오.'));
	if(num ==0) break;
	sum += num;
	str += num + " ";
	}
	res = "입력한 값들 : " +str +"<br>";
	res += "더한 합 : " +sum;
	document.querySelector('#result3').innerHTML = res;
}
 proc4 = () => {
		
		var str ="";
		for(let i =1; i<=10; i++){
			for(let k=1; k<=10; k++){
				if((i+k)%3 >0)
				continue;
				
				str += `${i} ${k} , &nbsp&nbsp&nbsp`;
			}
		}
		document.querySelector('#result4').innerHTML = str;
	
	
}
proc5 = () => {
		var str ="";
		for(let i=1; i<=100; i++){
			if(i%2==0 && i%3==0){
				str += `${i}, &nbsp&nbsp`
			}
		}
		document.querySelector('#result5').innerHTML = str;
}
proc6 = () => {
		var str = "";
		var grth = "합이 100이상인 값들: "; //두수의 합이 100보다 큰 값들을 저장하는 변수 
		var leth = "합이 100미만인 값들: "; //두수의 합이 100보다 작은 값들을 저장하는 변수 
		while(true){
			su1 = parseInt(prompt('첫번째 입력: '));
			su2 = parseInt(prompt('두번째 입력: '));
			if(su1==0 && su2==0) {
				break;
			}else if(su1+su2 >=100){
				grth += (su1+su2)+" , ";
			}
			else if(su1+su2<100){
				leth += (su1+su2)+" , ";
			}
		}
			str = grth+"<br>"+leth;
			document.querySelector('#result6').innerHTML = str;
}