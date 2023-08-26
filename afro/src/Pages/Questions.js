import React, { useState } from "react";
import styled from "styled-components";


const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
`;

const Question = styled.h1`
  margin-bottom: 20px;
  color: white;
`;

const OptionLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
`;

const OptionInput = styled.input`
  margin-right: 5px;
  color: white;
`;

const NextButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Questions = (props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    
    const movie = [
      {
        question: "How are you today?",
        fakeAns1: "Not well",
        fakeAns2: "Not bad",
        Ans: "Amazing",
      },
      {
        question: "How are you today?",
        fakeAns1: "Not well",
        fakeAns2: "Not bad",
        Ans: "Amazing",
      },
      {
        question: "Howdy?",
        fakeAns1: "Not well",
        fakeAns2: "Not bad",
        Ans: "Amazing",
      },
      {
        question: "How are you?",
        fakeAns1: "Not well",
        fakeAns2: "Not bad",
        Ans: "Amazing",
      },
      // Add more questions here
    ];
  
    const handleOptionChange = (event) => {
      setSelectedAnswer(event.target.value);
    };
  
    const handleNextQuestion = () => {
      if (selectedAnswer) {
        setSelectedAnswer("");
        if (currentQuestionIndex === movie.length - 1) {
          setIsQuizCompleted(true);
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }
    };
  
    const handleSubmit = () => {
      // Handle the submission of the quiz
    };
  
    const currentQuestion = movie[currentQuestionIndex];
  
    return (
      <QuestionContainer>
        {isQuizCompleted ? (
          <div>Quiz completed! Thanks for participating.</div>
        ) : (
          <>
            <Question>{currentQuestion.question}</Question>
            {currentQuestion.fakeAns1 && (
              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="radio"
                  value={currentQuestion.fakeAns1}
                  checked={selectedAnswer === currentQuestion.fakeAns1}
                  onChange={handleOptionChange}
                />
                {currentQuestion.fakeAns1}
              </OptionLabel>
            )}
            {currentQuestion.fakeAns2 && (
              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="radio"
                  value={currentQuestion.fakeAns2}
                  checked={selectedAnswer === currentQuestion.fakeAns2}
                  onChange={handleOptionChange}
                />
                {currentQuestion.fakeAns2}
              </OptionLabel>
            )}
            {currentQuestion.Ans && (
              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="radio"
                  value={currentQuestion.Ans}
                  checked={selectedAnswer === currentQuestion.Ans}
                  onChange={handleOptionChange}
                />
                {currentQuestion.Ans}
              </OptionLabel>
            )}
            {currentQuestionIndex === movie.length - 1 ? (
              <NextButton onClick={handleSubmit}>Submit</NextButton>
            ) : (
              <NextButton onClick={handleNextQuestion}>Next</NextButton>
            )}
          </>
        )}
      </QuestionContainer>
    );
  };
  
  export default Questions;
  