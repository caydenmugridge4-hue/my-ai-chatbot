import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const message = req.body.message;

  const reply = "You said: " + message;

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
