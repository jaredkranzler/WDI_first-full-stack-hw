<!DOCTYPE html>
<html>
<head>
  <title>Edit</title>
</head>
<body>
  <h1>Edit Character</h1>

  <form method="POST" action="/characters/<%=character.id%>?_method=PUT">
    Name: <input type="text" name="name" value="<%= character.name%>">
    Patronus: <input type="text" name="patronus" value="<%= character.patronus%>">
    Blood Status: <input type="text" name="bloodStatus" value="<%= character.bloodStatus%>">
    Is Human: <input type="checkbox" name="human"
<% if(character.human === true) { %>
  checked
  <% } %>
    >
    <br>
    <input type="submit" name="submit changes"/>
  </form>



</body>
</html>