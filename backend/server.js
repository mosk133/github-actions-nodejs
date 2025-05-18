const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/fake", (req, res) => {
  res.json({ message: "Aquest és un endpoint de prova" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
