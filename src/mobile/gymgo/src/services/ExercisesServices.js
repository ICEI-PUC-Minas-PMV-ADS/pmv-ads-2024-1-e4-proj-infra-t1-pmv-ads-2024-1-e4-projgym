// const { Exercise: ExerciseModel } = require("../models/Exercise");

// const exerciseController = {
//     create: async (req, res) => {
//         try {
//             const exercise = {
//                 name: req.body.name,
//                 series: req.body.series,
//                 repetitions: req.body.repetitions,
//                 demo: req.body.demo,
//                 thumb: req.body.thumb,
//             };

const { Exercise: ExerciseModel } = require("../models/Exercise");

const exerciseController = {
    create: async (req, res) => {
        try {
            const exercise = {
                name: req.body.name,
                series: req.body.series,
                repetitions: req.body.repetitions,
                demo: req.body.demo,
                thumb: req.body.thumb,
            };

            const newExercise = new ExerciseModel(exercise);
            await newExercise.save();

            res.status(201).json(newExercise);
        } catch (error) {
            res.status(500).json({ error: "Failed to create exercise" });
        }
    },
};

module.exports = exerciseController;



const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController");

router.route("/exercises").post(exerciseController.create);

module.exports = router;


module.exports = exerciseController;


  router.route("/exercises")
        .post((req, res) => exerciseController.create(req, res));

    export async function exerciseCreate(name, email, password, confirmPassword) {
        const response = await axios.post("http://192.168.0.101:3333/users/edit", {
            name: req.body.name,
            series: req.body.series,
            repetitions: req.body.repetitions,
            demo: req.body.demo,
            thumb: req.body.thumb,
        })
    return (response.status == 200)
    }

// const { Exercise: ExerciseModel } = require("../models/Exercise");

// const exerciseController = {
//     create: async (req, res) => {
//         try {
//             const exercise = {
//                 name: req.body.name,
//                 series: req.body.series,
//                 repetitions: req.body.repetitions,
//                 demo: req.body.demo,
//                 thumb: req.body.thumb,
//             };

//             const newExercise = new ExerciseModel(exercise);
//             await newExercise.save();

//             res.status(201).json(newExercise);
//         } catch (error) {
//             res.status(500).json({ error: "Failed to create exercise" });
//         }
//     },
// };
// const express = require("express");
// const router = express.Router();
// const exerciseController = require("../controllers/exerciseController");

// router.route("/exercises").post(exerciseController.create);

// module.exports = router;


// import axios from "axios";

// export async function exerciseCreate(name, series, repetitions, demo, thumb) {
//     try {
//         const response = await axios.post("http://192.168.0.101:3333/exercises", {
//             name,
//             series,
//             repetitions,
//             demo,
//             thumb,
//         });

//         return response.status === 201; // Verifica se o exercício foi criado com sucesso
//     } catch (error) {
//         console.error("Failed to create exercise", error);
//         return false;
//     }
// }
