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



  .route("/exercises")
        .post((req, res) => exerciseController.create(req, res));

    export async function exerciseCreate(name, email, password, confirmPassword) {
        const response = await axios.post("http://192.168.100.67:3333/users/edit", {
            name: req.body.name,
            series: req.body.series,
            repetitions: req.body.repetitions,
            demo: req.body.demo,
            thumb: req.body.thumb,
        })
    return (response.status == 200)
