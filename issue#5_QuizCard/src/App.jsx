// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 컴포넌트 import
import QuizCard from './QuizCards/QuizCard';
import AnswerScreen from './QuizCards/AnswerScreen';
import AnswerExplain from './QuizCards/AnswerExplain';
import HelpScreen from './QuizCards/HelpScreen';

// 퀴즈 흐름 로직을 관리하는 커스텀 훅 import
import { useQuizFlow } from './hooks/useQuizFlow';

function QuizFlow() {
  // 커스텀 훅에서 퀴즈 상태 및 핸들러 함수들을 가져옴
  const {
    currentQuiz,    // 현재 퀴즈 객체
    selected,       // 사용자가 선택한 보기
    handleAnswer,   // 보기 선택 시 처리 함수
    handleNext,     // 다음 문제로 이동 함수
    handleHome,     // 홈(처음)으로 돌아가는 함수
    handleExplain,  // 해설 화면으로 이동 함수
    handleHelp,     // 도움말 화면으로 이동 함수 (현재 미사용이지만 필요시 확장 가능)
  } = useQuizFlow();

  return (
    <Routes>
      {/* 퀴즈 풀이 화면 */}
      <Route
        path="/quiz"
        element={<QuizCard quiz={currentQuiz} onAnswer={handleAnswer} />}
      />

      {/* 정오답 확인 화면 */}
      <Route
        path="/answer"
        element={
          <AnswerScreen
            quiz={currentQuiz}
            selected={selected}
            onNext={handleNext}
            onHome={handleHome}
            onExplain={handleExplain}
          />
        }
      />

      {/* 해설 보기 화면 */}
      <Route
        path="/explain"
        element={<AnswerExplain quiz={currentQuiz} onBack={() => window.history.back()} />}
      />

      {/* 도움말 화면 */}
      <Route
        path="/help"
        element={<HelpScreen quiz={currentQuiz} onBack={handleHome} />}
      />

      {/* 기본 경로 또는 잘못된 경로 접근 시 퀴즈 화면으로 리디렉션 */}
      <Route path="*" element={<Navigate to="/quiz" replace />} />
    </Routes>
  );
}

export default QuizFlow;
