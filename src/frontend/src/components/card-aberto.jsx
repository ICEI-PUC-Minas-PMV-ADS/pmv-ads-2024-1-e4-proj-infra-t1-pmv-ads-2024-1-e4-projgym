import React from "react";
import "./exercise-popup.css"; // Estilos do popup

const ExercisePopup = ({ exercise, onClose }) => {
  return (
    <div className="exercise-pop">
      <div className="content-pop">
        <h2>{exercise.name}</h2>
        <img src={exercise.demo} alt={exercise.title} />
        <p>Séries: {exercise.series}</p>
        <p>Repetições: {exercise.repetitions}</p>
        <button className="close-button" onClick={onClose}>
          Marcar como realizado
        </button>
      </div>
    </div>
  );
};

export default ExercisePopup;
