import React from 'react';
import { Link } from 'react-router-dom';
import ExamList from './ExamList';

const Report = () => {
  return (
    <div>
      <h1>Report</h1>
      <Link to="/report/exam-list">Exam List</Link>
      <Link to="/report/answers">Answers</Link>
      <ExamList />
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Report;