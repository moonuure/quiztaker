import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to QuizTaker</h1>
      <p>Build and take quizzes easily!</p>
      <Link to="/quiz-builder">
        <button>Start Building a Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
