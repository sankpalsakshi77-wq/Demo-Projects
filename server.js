const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let users = [];


app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  users.push({ name, email, password });

  res.json({
    success: true,
    message: "Signup success"
  });
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    res.json({
      success: true,
      name: user.name
    });
  } else {
    res.json({
      success: false,
      message: "Invalid login"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running http://localhost:5000");
});
