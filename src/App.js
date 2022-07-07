import React, { useState } from "react";
import { Player } from 'video-react';
import "../node_modules/video-react/dist/video-react.css";


// 1)Heel toe walking x
// 2)Single leg standing heel raise each leg x10x
// 3)Stork standing foot position x
// 4) Standing arms on wall
// A-pelvic tiltsx
// B-rotationx
// C-side tilts x
// 5) Standing hip rotation bent knee x
// 6) Squat-narrow,  wide, rear load, single wleg pistol x
// 7)Lunge both legs rotation right / left x
// 8) Supine SLR 
// 9) Diaphragm excursion 2-3 inches 


function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Can patient heel toe walk?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient single leg standing heel raise each leg 10 times?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a stork standing foot position?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic tilt?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic rotation?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic side tilt?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a standing hip rotation with bent knee?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a squat-narrow,  wide, rear load, single leg pistol?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a lunge both legs rotation right / left?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a supine SLR",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do diaphragm excursion 2-3 inches?",
      video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="container">
      {/* 1. Header  */}
      <div className="flex flex-col items-center h-screen justify-center mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-5">LCPT Quick Screen Tool</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="rounded bg-gray-100">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h2>Example Video:</h2>
          <Player
            playsInline
            src={questions[currentQuestion].video}
          />

          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}
export default App;
