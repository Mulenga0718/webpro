<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
	h1{
	background : #33FFFF;
	color : #FF00FF;
	}
	p{
		font-size : 2.0em;
		
	}
</style>
</head>
<body>
<h1>JSP : Java Server Page</h1>
<%
	request.setCharacterEncoding("UTF-8");
	String username = request.getParameter("name");
	String userid = request.getParameter("id");
	String filename = request.getParameter("file");
	String userno = request.getParameter("no");
	out.print("<p>이름 : "+username+"</p><br>");
	out.print("<p>아이디 : "+userid+"</p><br>");
	out.print("<p>첨부파일 : "+filename+"</p><br>");
	out.print("<p>번호 : "+userno+"</p><br>");
%>
</body>
</html>