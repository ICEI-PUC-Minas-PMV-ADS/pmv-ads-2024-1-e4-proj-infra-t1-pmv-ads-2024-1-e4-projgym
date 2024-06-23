import "./card-exercicios.css";
import Button from "./button.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CardExer() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3333/exercises");
        console.log(response.data);
        setExercises(response.data);
      } catch (error) {
        console.error(
          "Erro ao buscar os detalhes dos produtos do carrinho:",
          error
        );
      }
    };

    fetchProductDetails();
  }, []);
const handleCheck = () => {}
const handleDelete = async (_id) => {
    try { 
        await axios.delete(`http://localhost:3333/exercises/${_id}`)
        setExercises(exercises.filter(exercise => exercise._id !== _id));
    } catch (error) {
        console.log(error)
    }
}
  return (
    <>
      {exercises.map((exercise, index) => (
        <div className="card" key={index}>
          <div className="thumb">
            <img
              src={
                "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3lzMzAzYmlxa3FkcWJ5enl2ZGJka2UxbjhsYWhjOG52ZGo5YWplNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vjQ2qPy5loXjl7m4j7/giphy.webp"
              }
              alt={exercise.title}
              style={{ width: "90px", height: "150px", margin: "0" }}
            />
          </div>
          <div className="info">
            <span className="title">{exercise.name}</span>
            <span className="series">{exercise.series} Series </span>
            <span className="repetitions">
              {exercise.repetitions} Repetições{" "}
            </span>
          </div>
          <div className="check mdi mdi-check" onClick={handleCheck}>
            {" "}
            <div>
              <button className="mini-button" onClick={ () => handleDelete(exercise._id)}>Marcar como realizado</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
