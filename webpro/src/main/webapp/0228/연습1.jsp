<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%	request.setCharacterEncoding("UTF-8");
	String username = request.getParameter("name");
	String useremail = request.getParameter("email");
	String usercontent = request.getParameter("content");
	usercontent = usercontent.replaceAll("\r","").replaceAll("\n", "<br>");
%>
</body>
<table border='1'>
	<tr>
	<td>이름</td>
	<td><%=username %></td>
	</tr>
	<tr>
	<td>이메일</td>
	<td><%=useremail %></td>
	</tr>
	<tr>
	<td>내용</td>
	<td><%=usercontent %></td>
	</tr>
</table>
</html>