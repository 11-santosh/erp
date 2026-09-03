const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "user",
    status: "ok"
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
