import React, { useState } from "react";
import emailjs from "@emailjs/browser"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';







function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([])
  const [value, setValue] = useState("");
  const [popup, setPopup] = useState(false)


  function sendEmail({from_name, to_name, message, send_to}){
    console.log(from_name, to_name, message, send_to)

    let newString = []
    message.forEach((item, index)  => {
      newString.push("<h2>" + (1+index)+'.' + item.Question+"</h2>" + '<br/>' +"<h3>"+ item.Answer+"</h3>" + '<br/>')
    })


    var templateParams = {
      from_name: from_name,
      to_name: to_name,
      message: newString.join(''),
      send_to: send_to,
    };
    
    emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
    });
  
    setValue('')
  }

  const questions = [
    {
      text: "Can patient heel toe walk?",
      gif: '//gifs.com/embed/oZ0lnX',
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient single leg standing heel raise each leg 10 times?",
      gif: '//gifs.com/embed/mqnjkG',
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do a stork standing foot position?",
      gif:'//gifs.com/embed/A62lrl',
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic tilt?",
      gif:'//gifs.com/embed/Og2DGr',
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic rotation?",
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do standing arms on wall pelvic side tilt?",
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do a standing hip rotation with bent knee?",
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do a squat-narrow,  wide, rear load, single leg pistol?",
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do a lunge both legs rotation right / left?",
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do a supine SLR",
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
      ],
    },
    {
      text: "Can patient do diaphragm excursion 2-3 inches?",
      options: [
        { id: 0, text: "No", isCorrect: true, color: 'bg-transparent text-black font-semibold hover:text-gray-300 py-2 px-10 m-2 border border-black rounded' },
        { id: 1, text: "Yes", isCorrect: false, color: 'bg-black hover:bg-gray-900 text-white font-bold m-2 py-2 px-10 rounded' },
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

  // go back in qeastion

  const goBack =()=> {
    if(currentQuestion === 0){

    }else{
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.filter(item => item !== answers[currentQuestion-1]))
    }

  }

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setAnswers([])
  };

  const recommendation =()=>{
    if(score >= 1 && score < 3){
      return 'very low'
    }
    if(score >= 3 && score < 5){
      return 'low'
    }
    if(score >= 5 && score < 7){
      return 'strong'
    }
    if(score >= 7 && score <= 11){
      return 'very strong'
    }

  }



  return (
    
    <div class="divBox flex items-center justify-center h-screen w-screen">

      {/* 1. Header  */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg p-1">
      <h1 className="text-3xl text-gray-700 font-bold mb-5">LCPT Quick Screen Tool</h1>
      
      {showResults ? (
        <div className="final-results">
          <div>
            <h3>Patient Score</h3>
            <div>{score}</div>
            <p>
              {`There is a ${recommendation()} likelihood that the patient will benefit from pelvic floor physical therapy.` }
            </p>
            
            {/* {answers.map((item, index )=>{
              return(
                <div key={index}>
                  {item.Question}:
                  {item.Answer}
                </div>
              )
            })} */}
          </div>
          <div class="flex flex-row justify-center">
          {/* <input value={value} onChange={e => setValue(e.target.value)}/> */}
          <button class="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold m-2 py-2 px-10 rounded" onClick={()=> sendEmail({from_name:'Lake City Health', to_name: "Patient", message: answers, send_to:value})}>Share</button>
          <button class="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold m-2 py-2 px-10 rounded" onClick={() => restartGame()}>Restart</button>
          </div>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <h2 className="text-2xl text-gray-700 font-bold mb-5">{questions[currentQuestion].text}</h2>
          <img class="w-full" src="https://thumbs.gfycat.com/PitifulGraveFairyfly-max-1mb.gif" alt="Sunset in the mountains"/>
          {/* <iframe src={questions[currentQuestion].gif} className="w-full"></iframe> */}




          {/* List of possible answers  */}

          <ul className="flex items-center justify-center">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  className={option.color}
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <div>
            <button class="hover:bg-red-400 text-red-800 font-bold py-2 px-7 mt-6 rounded-r" onClick={()=> goBack()}><ArrowBackIcon/></button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
export default App;
