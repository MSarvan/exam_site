import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ExamContext } from '../context/ExamContext';

const ExamList = () => {
  const { exams } = useContext(ExamContext);

  return (
    <div>
      <h2>Exam List</h2>
      {exams.map((exam) => (
        <div key={exam.examName}>
          <h3>Exam Name: {exam.examName}</h3>
          <p>Total Questions: {exam.questions.length}</p>
          {/* Calculate other metrics like total attendees, average correct answers */}
          <Link to={`/report/answers/${exam.examName}`}>View Answers</Link>
        </div>
      ))}
    </div>
  );
};

export default ExamList;
