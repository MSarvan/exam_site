import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ExamContext } from '../context/ExamContext';

const CreateExam = () => {
  const [examName, setExamName] = useState('');
  const [questions, setQuestions] = useState([]);
  const { addExam } = useContext(ExamContext);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: '', marks: 0 }]);
  };

  const handleQuestionChange = (event, index) => {
    const { name, value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    const exam = { examName, questions };
    addExam(exam);
    setExamName('');
    setQuestions([]);
  };

  return (
    <div>
      <h1>Create Exam</h1>
      <label htmlFor="examName">Exam Name:</label>
      <input type="text" id="examName" value={examName} onChange={(e) => setExamName(e.target.value)} />
      {questions.map((question, index) => (
        <div key={index}>
          <h3>Question {index + 1}</h3>
          <label htmlFor={`question-${index}`}>Question:</label>
          <input
            type="text"
            id={`question-${index}`}
            name="question"
            value={question.question}
            onChange={(e) => handleQuestionChange(e, index)}
          />
          <label htmlFor={`optionA-${index}`}>Option A:</label>
          <input
            type="text"
            id={`optionA-${index}`}
            name="optionA"
            value={question.optionA}
            onChange={(e) => handleQuestionChange(e, index)}
          />
          <label htmlFor={`optionB-${index}`}>Option B:</label>
          <input
            type="text"
            id={`optionB-${index}`}
            name="optionB"
            value={question.optionB}
            onChange={(e) => handleQuestionChange(e, index)}
          />
          <label htmlFor={`optionC-${index}`}>Option C:</label>
          <input
            type="text"
            id={`optionC-${index}`}
            name="optionC"
            value={question.optionC}
            onChange={(e) => handleQuestionChange(e, index)}
          />
          <label htmlFor={`optionD-${index}`}>Option D:</label>
          <input
            type="text"
            id={`optionD-${index}`}
            name="optionD"
            value={question.optionD}
            onChange={(e) => handleQuestionChange(e, index)}
          />
          <label htmlFor={`correctAnswer-${index}`}>Correct Answer:</label>
          <input
            type="text"
            id={`correctAnswer-${index}`}
            name="correctAnswer"
            value={question.correctAnswer}
            onChange={(e) => handleQuestionChange(e, index)}
          />
          <label htmlFor={`marks-${index}`}>Marks for Correct Answer:</label>
          <input
            type="number"
            id={`marks-${index}`}
            name="marks"
            value={question.marks}
            onChange={(e) => handleQuestionChange(e, index)}
          />
        </div>
      ))}
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default CreateExam;