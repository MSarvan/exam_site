export const getExams = async () => {
  try {
    const response = await fetch("/api/exams");
    if (response.ok) {
      const exams = await response.json();
      return exams;
    } else {
      throw new Error("Failed to fetch exams");
    }
  } catch (error) {
    console.error(error);
    // return [];
  }
};
