const { Exercise: ExerciseModel } = require("../models/Exercise");

const exerciseController = {
create: async (req, res) => {
    try {
      const exercise = {
        // name: req.body.name,
        // series: req.body.series,
        // repetitions: req.body.repetitions,
        // demo: req.body.demo,
        // thumb: req.body.thumb,
        name: 'Supino',
        series: 4,
        repetitions: 9
        demo: 'asdsd',
        thumb: ''
      };

      const response = await ExerciseModel.create(exercise);

      // res.status(201).json({ response, message: "Created" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const exercise = await ExerciseModel.find();

      res.json(exercise);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;

      const exercise = await ExerciseModel.findById(id);

      if (!exercise) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.json(exercise);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const exercise = await ExerciseModel.findById(id);

      if (!exercise) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      const deletedExercise = await ExerciseModel.findByIdAndDelete(id);

      res.status(200).json({ deletedExercise, message: "Deleted" });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const exercise = {
        name: req.body.name,
        series: req.body.series,
        repetitions: req.body.repetitions,
        demo: req.body.demo,
        thumb: req.body.thumb,
      };

      const updatedExercise = await ExerciseModel.findByIdAndUpdate(id, exercise);

      if (!updatedExercise) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.status(200).json({ exercise, message: "Updated" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = exerciseController;
