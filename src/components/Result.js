function Result({ questions, currentIndex }) {
  return (
    <div className="question__container">
      {/* Quesion container */}
      <div className="question__box">
        <p>{questions[currentIndex].question}</p>
      </div>
      {/* Options */}
      <div className="options__box">
        {questions[currentIndex].options.map((value, index) =>
          questions[currentIndex].correct === index ? (
            <div
              key={index}
              className="option__wrapper"
              style={{ background: "green" }}
            >
              <p>{value}</p>
            </div>
          ) : (
            <div
              key={index}
              className="option__wrapper"
              style={{ background: "red" }}
            >
              <p>{value}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Result;
