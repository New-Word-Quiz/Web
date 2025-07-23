// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import quizData from './data/quizData';
import QuizCard from './components/QuizCard';
import AnswerScreen from './components/AnswerScreen';
import AnswerExplain from './components/AnswerExplain';
import HelpScreen from './components/HelpScreen';

// 배열 셔플 함수
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function QuizFlow() {
  const navigate = useNavigate();

  // 처음 로딩 시 문제를 랜덤으로 섞기
  const [quizPool, setQuizPool] = useState(() => shuffleArray(quizData));
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState('');

  const currentQuiz = quizPool[step];

  const handleAnswer = (option) => {
    setSelected(option);
    navigate('/answer');
  };

  const handleNext = () => {
    const isLast = step === quizPool.length - 1;
    if (isLast) {
      alert('퀴즈가 모두 끝났습니다!');
      setQuizPool(shuffleArray(quizData)); // 퀴즈 다시 셔플
      setStep(0);
      setSelected('');
      navigate('/quiz');
    } else {
      setStep(step + 1);
      setSelected('');
      navigate('/quiz');
    }
  };

  const handleHome = () => {
    setStep(0);
    setSelected('');
    navigate('/quiz');
  };

  return (
    <Routes>
      <Route
        path="/quiz"
        element={
          <QuizCard
            quiz={currentQuiz}
            onAnswer={handleAnswer}
          />
        }
      />
      <Route
        path="/answer"
        element={
          <AnswerScreen
            quiz={currentQuiz}
            selected={selected}
            onNext={handleNext}
            onHome={handleHome}
            onExplain={() => navigate('/explain')}
          />
        }
      />
      <Route
        path="/explain"
        element={
          <AnswerExplain
            quiz={currentQuiz}
            onBack={() => navigate('/answer')}
          />
        }
      />
      <Route
        path="/help"
        element={
          <HelpScreen
            quiz={currentQuiz}
            onBack={() => navigate('/quiz')}
          />
        }
      />
      <Route path="*" element={<Navigate to="/quiz" replace />} />
    </Routes>
  );
}

export default QuizFlow;
