import React, { createContext, useState, useEffect } from "react";
import { saveExams, getExams } from '../examData';

export const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const fetchedExams = await getExams();
      setExams(fetchedExams || []);
    };

    fetchExams();
  }, []);

  const addExam = (exam) => {
    setExams([...exams, exam]);
  };

  const contextValue = {
    exams,
    addExam,
  };

  return (
    <ExamContext.Provider value={contextValue}>{children}</ExamContext.Provider>
  );
};
