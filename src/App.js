import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Result from "./components/Result";

const questions = [
  {
    question: "Which planet in our solar system is known as the Red Planet?",
    options: [
      "Alexander Fleming",
      "Alexander Graham Bell",
      "Thomas Alva Edison",
      "Mars",
    ],
    correct: 3,
  },
  {
    question: "Who invented the Light Bulb",
    options: ["Mars", "Thomas Alva Edison", "Jupiter", "Alexander Graham Bell"],
    correct: 1,
  },
  {
    question: "Who discovered Penicillin",
    options: [
      "Alexander Graham Bell",
      "Alexander Fleming",
      "Thomas Alva Edison",
      "Jupiter",
    ],
    correct: 1,
  },
];

const colors = ["#008787", "#30c5ff", "rgb(230, 230, 0)", "tomato"];

function App() {
  let seconds = 60;
  const [timer, setTimer] = useState(seconds);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  const [coins, setCoins] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer < 1) {
        if (stopTimer === false) {
          setCurrentIndex(questions.length + 1);
          setStopTimer(true);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const timerWidth = ((timer * 100) / seconds).toFixed(0);

  const handleAnswers = (option) => {
    if (questions[currentIndex].correct.toString() === option) {
      setCoins(coins + 1);
      setCorrect(true);
    }

    setShowResult(true);
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setShowResult(false);
      setCorrect(false);
    }, 2000);
  };

  return (
    <div className="container">
      {questions.length > currentIndex ? (
        <>
          {/* Timer */}
          <div className="timer" style={{ width: timerWidth + "%" }} />
          {/* Header */}
          <Header
            coins={coins}
            totalQuestions={questions.length}
            currentQue={currentIndex + 1}
          />
          {/* Questions and answers && results layout */}
          {!showResult ? (
            <Questions
              questions={questions}
              colors={colors}
              currentIndex={currentIndex}
              handleAnswers={handleAnswers}
            />
          ) : (
            <Result
              questions={questions}
              currentIndex={currentIndex}
              colors={colors}
            />
          )}
          {showResult &&
            (correct ? (
              <div className="result__bar" style={{ background: "green" }}>
                <p>Correct</p>
              </div>
            ) : (
              <div className="result__bar" style={{ background: "red" }}>
                <p>Wrong</p>
              </div>
            ))}
        </>
      ) : (
        <div className="restart__container">
          <button onClick={() => window.location.reload()}>Try again</button>
        </div>
      )}
    </div>
  );
}

export default App;
