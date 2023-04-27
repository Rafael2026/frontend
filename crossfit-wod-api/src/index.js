// In src/index.js
const express = require("express");
// *** REMOVE ***
const v1Router = require("./v1/routes");
// *** ADD ***
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;


// *** REMOVE ***
app.use("/api/v1", v1Router);

// *** ADD ***
app.use("/api/v1/workouts", v1WorkoutRouter);


// *** REMOVE ***
app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});