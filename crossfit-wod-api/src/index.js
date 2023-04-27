// In src/index.js
const express = require("express");

const v1Router = require("./v1/routes"); // *** REMOVE ***

const v1WorkoutRouter = require("./v1/routes/workoutRoutes"); // *** ADD ***

const app = express();
const PORT = process.env.PORT || 3000;

// *** REMOVE ***
app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

// *** ADD ***
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

// *** REMOVE ***
app.use("/api/v1", v1Router);

// *** ADD ***
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});