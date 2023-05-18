import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/create">Create Exam</Link>
      <Link to="/attend">Attend Exam</Link>
      <Link to="/report">Report</Link>
    </div>
  );
};

export default HomePage;