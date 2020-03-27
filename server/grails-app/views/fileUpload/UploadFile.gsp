<%--
  Created by IntelliJ IDEA.
  User: Pangeni
  Date: 3/26/2020
  Time: 12:48 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
</head>

<body>
<g:form controller="fileUpload" method="post" action="saveFile">
    <input type="file" name="file">
    <input type="submit" value="Submit">
</g:form>

</body>
</html>