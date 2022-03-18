<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<%	request.setCharacterEncoding("UTF-8");
	String username = request.getParameter("name2");
	String useraddr = request.getParameter("addr2");
	String useremail = request.getParameter("email2");
	String usergender = request.getParameter("gender");
%>
</head>
<body>
<table border='1'>
	<tr>
	<td>이름</td>
	<td><%=username %></td>
	</tr>
	<tr>
	<td>주소</td>
	<td><%=useraddr %></td>
	</tr>
	<tr>
	<td>이메일</td>
	<td><%=useremail %></td>
	</tr>
	<tr>
	<td>성별</td>
	<td><%=usergender %></td>
	</tr>
</table>
</body>
</html>