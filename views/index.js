<!DOCTYPE html>
<html>
<head>
  <title>Characters Index</title>
</head>
<body>
  <a href="/characters/new">Create New Character</a>

  <ul>
    <% for (let i = 0; i < characters.length; i++) { %>
      <li>
        <a href="http://localhost:3000/characters/characters[i].id %>"> <%= characters[i].name %></a>

        <form action="/characters/<%characters[i].id%>?_method=DELETE" method="POST">
            <button type="submit">Delete Character</button>
          
        </form>

        <a href="/characters/<%=characters[i].id%>/edit">Edit</a>
        <br>
        <br>

      </li>
    <% } %>
  </ul>


</body>
</html>