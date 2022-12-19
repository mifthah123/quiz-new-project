function Questions({ questions, colors, currentIndex, handleAnswers }) {
  return (
    <div className="question__container">
      {/* Quesion container */}
      <div className="question__box">
        <p>{questions[currentIndex].question}</p>
      </div>
      {/* Options */}
      <div className="options__box">
        <button
          onClick={() => handleAnswers("0")}
          className="option__wrapper"
          style={{ background: colors[0] }}
        >
          <p>{questions[currentIndex].options[0]}</p>
        </button>
        <button
          onClick={() => handleAnswers("1")}
          className="option__wrapper"
          style={{ background: colors[1] }}
        >
          <p>{questions[currentIndex].options[1]}</p>
        </button>
        <button
          onClick={() => handleAnswers("2")}
          className="option__wrapper"
          style={{ background: colors[2] }}
        >
          <p>{questions[currentIndex].options[2]}</p>
        </button>
        <button
          onClick={() => handleAnswers("3")}
          className="option__wrapper"
          style={{ background: colors[3] }}
        >
          <p>{questions[currentIndex].options[3]}</p>
        </button>
      </div>
    </div>
  );
}

export default Questions;
