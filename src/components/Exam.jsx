import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExamContext } from '../context/ExamContext';

const Exam = () => {
  const { examName } = useParams();
  const { exams } = useContext(ExamContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentExam = exams.find((exam) => exam.examName === examName);

  if (!currentExam) {
    return <div>Exam not found</div>;
  }

  const { questions } = currentExam;

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    // Handle the logic to evaluate answers and show the result
    // You can use the answers state array to calculate the score
  };

  return (
    <div>
      <h1>{examName} Exam</h1>
      {questions?.length > 0 ? (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {questions?.[currentQuestionIndex]?.options?.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    checked={answers[currentQuestionIndex] === option}
                    onChange={() => handleAnswerSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {currentQuestionIndex > 0 && (
            <button onClick={handlePreviousQuestion}>Previous Question</button>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      ) : (
        <div>No questions available for this exam.</div>
      )}
    </div>
  );
};

export default Exam;
