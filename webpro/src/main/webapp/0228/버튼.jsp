<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
	request.setCharacterEncoding("utf-8");
	String username = request.getParameter("name");
	String userid = request.getParameter("id");
	
	out.print("<p>이름 : "+username+"</p><br>");
	out.print("<p>아이디 : "+userid+"</p><br>");
%>
</body>
</html>