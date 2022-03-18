/**
 * 
 */
 function print(out){
	str = "";
	for(let i=0; i< fr.lenth; i++){
		str += fr[i]+"<br>";
	}
	document.querySelector(out).innerHTML = fr; 
}
 function proc1(){
	fr = ["사과","복숭아","딸기","바나나"];

	//document.querySelector("#result1").innerHTML = fr;
	print("#result1");
}
 function proc2(){
	fr = new Array("사과", 1200, "파인애플", 345.678, "망고");
	print("#result2");
}
 function proc3(){
fr = new Array(); 
	fr[0] = "사과";
	fr[1] = 100;
	fr[2] = 123,456;
	
	print("#result3");

	
}