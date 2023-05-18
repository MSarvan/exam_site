const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/exams", (req, res) => {
  const examsData = fs.readFileSync("exams.json");
  const exams = JSON.parse(examsData);
  res.json(exams);
});

// Other routes and server logic...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
