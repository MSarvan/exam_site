import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ExamContext } from '../context/ExamContext';

const AttendExam = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const { exams } = useContext(ExamContext);

  const handleEnter = () => {
    // Handle the logic to save the user details and proceed to exam
  };

  return (
    <div>
      <h1>Attend Exam</h1>
      <label htmlFor="userName">User Name:</label>
      <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="dob">Date of Birth:</label>
      <input type="text" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
      <button onClick={handleEnter}>Enter</button>
      <h2>Available Exams:</h2>
      {exams?.map((exam) => (
        <div key={exam?.examName}>
          <h3>{exam?.examName}</h3>
          <Link to={`/attend/${exam?.examName}`}>Start Exam</Link>
        </div>
      ))}
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default AttendExam;