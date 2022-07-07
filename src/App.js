import React, { useState } from "react";





function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([])

  const questions = [
    {
      text: "Can patient heel toe walk?",
      gif: '//gifs.com/embed/oZ0lnX',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient single leg standing heel raise each leg 10 times?",
      gif: '//gifs.com/embed/mqnjkG',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a stork standing foot position?",
      gif:'//gifs.com/embed/A62lrl',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic tilt?",
      gif:'//gifs.com/embed/Og2DGr',
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic rotation?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic side tilt?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a standing hip rotation with bent knee?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a squat-narrow,  wide, rear load, single leg pistol?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a lunge both legs rotation right / left?",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do a supine SLR",
      options: [
        { id: 0, text: "Yes", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Can patient do diaphragm excursion 2-3 inches?",
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
      setAnswers([...answers,{'Question': questions[currentQuestion].text,'Answer': "Yes"}])
    }else{
      setAnswers([...answers, {'Question': questions[currentQuestion].text,'Answer': "No"}])
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
    setAnswers([])
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
            {questions.length - score} Pelvic Floor Concerns
          </h2>

          <div>
            {answers.map((item)=>{
              return(
                <div>
                  {item.Question}:
                  {item.Answer}
                </div>
              )
            })}
          </div>

          <button onClick={() => restartGame()}>Restart exam</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="rounded bg-gray-100 w-96">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h2>Example Video:</h2>
          <iframe src={questions[currentQuestion].gif} className="w-full"></iframe>

          {/* <Player
            playsInline
            src={questions[currentQuestion].video}
          /> */}

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
