const express = require("express");
const connectDB = require("./config/db");
const app = express();

const PORT = process.env.IP || 5000;

//DB connect
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

app.get("/", (req, res) => res.send("Api is Running"));

app.listen(PORT, () => console.log(`Server is runnning at port ${PORT}`));