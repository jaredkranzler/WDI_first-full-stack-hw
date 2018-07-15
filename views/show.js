<!DOCTYPE html>
<html>
<head>
  <title>Show</title>
</head>
<body>
  <h1>Characters Show Page</h1>

  <h3>Characters Name: <%= charactername %></h3>

  <h4>Patronus: <%= character.patronus %></h4>

  <h5>Blood Status <%= character.bloodStatus %></h5>

  <% if (character.human === true) { %>
    <span>Mudblood</span>
  <% } else { %>
    <span>Pureblood</span>
  <% } %>  

  <h5><a href="http://localhost:3000/characters/">back to Characters Index</a></h5>
  
</body>
</html>