/**
 * 
 */
 
	function datapro(){
		f =	document.ff; //form접근
	
		//입력한 값을 가져온다. 
		namevalue = f.name.value.trim();
			//공백 검증 
			if(namevalue.length <1){
				alert('이름을 입력하세요.');
				return false;
			}
			//
			if(namevalue.length <2 || namevalue.length >5){
			alert("이름은 2~5사이입니다.");
				return false;
			}
			
			//정규식
			namereg = /^[가-힝]{2,5}$/
			if(!(namereg.test(namevalue))){
				alert('이름 형식오류입니다.');
				return false;
			}
			//------------------------------
			//아이디 검증 
			idvalue = f.userid.value.trim();
			
			if(idvalue.length < 1){
				alert("아이디 입력하세요");
				return false;
			}
			 
			if(idvalue.length <4 || idvalue.length >10){
				alert("아이디는 4~10사이 입니다");
				return false;
			}
			
			idreg = /^[a-zA-Z][a-zA-Z0-9]{3,9}$/
			if(!(idreg.test(idvalue))){
				alert("아이디 형식오류입니다.");
				return false;
			}
			//-------------------------------------
			//비밀 번호 
			passvalue = f.pass.value.trim();
			
			if(passvalue.length<1){
				alert("비밀번호를 입력하세요");
				return false;
			}
			if(passvalue.length <4 || passvalue.lenth>12){
				alert("비밀번호는 4~12사이 입니다.");
				return false;
			}
			passreg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{4,12}$/;
			if(!(passreg.test(passvalue))){
				alert("비밀번호 형식오류");
				return false;
	}
			
			//-------------------------------------
			//이메일 
			emailvalue = f.email.value.trim();
			
			//공백 
			if(emailvalue.length <1){
				alert("이메일을 입력하세요");
				return false;
			}
			//정규식 - 첫글자는 영문자 1글자 - 영문자나 숫자가 올 수 있다. 
			//@ - 뒤에는 
			emailreg = /^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-z]+){1,2}$/
			if(!(emailreg.test(emailvalue))){
				alert("이메일 형식오류 ,,");
				return false;
			}
			
			//--------------------------------------
			//전화번호 
			phvalue = f.phone.value.trim();
			
			//공백 
			if(phvalue.length < 1){
				alert("전화번호를 입력하세요.");
				return false;
			}
			//길이 11자리 일치 
			if(phvalue.length !=11){
				alert("전화번호는 11자리입니다.");
				return false;
			}
			//정규식 
			phreg = /^\d{3}\d{4}\d{4}$/
			if(!(phreg.test(phvalue))){
				alert("전화번호 형식오류");
				return false;
			}
		//	alert("올바른 데이타 성공");
		return true;	
 }	