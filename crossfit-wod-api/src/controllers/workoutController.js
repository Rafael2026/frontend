// In src/controllers/workoutController.js
const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {

  const allWorkouts = workoutService.getAllWorkouts();
  // *** ADD ***
  res.send({ status: "OK", data: allWorkouts });
  //res.send("<h2>Get all workouts</h2>");
};

const getOneWorkout = (req, res) => {
  
  const workout = workoutService.getOneWorkout();

  res.send("<h2>Get an existing workout</h2>");
};

const createNewWorkout = (req, res) => {
  
  const createdWorkout = workoutService.createNewWorkout();

  res.send("<h2>Create a new workout</h2>");
};

const updateOneWorkout = (req, res) => {
  
  const updatedWorkout = workoutService.updateOneWorkout();

  res.send("<h2>Update an existing workout</h2>");
};

const deleteOneWorkout = (req, res) => {
  
  workoutService.deleteOneWorkout();
  
  res.send("<h2>Delete an existing workout</h2>");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};