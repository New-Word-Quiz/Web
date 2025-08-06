// src/components/HelpScreen.jsx

import React from 'react';
import './HelpScreen.css'; // 해당 컴포넌트 전용 스타일 파일 import

export default function HelpScreen({ quiz, onBack }) {
  return (
    <div className="help-container">
      <div className="help-card">
        {/* 상단 타이틀 */}
        <div className="help-title">도움말</div>

        {/* 퀴즈 이미지 출력 */}
        <img src={quiz.image} alt="quiz-help" className="help-image" />

        {/* 의미 영역 */}
        <div className="section-title">의미</div>
        <div className="section-box">
          {/* 줄바꿈(\n) 기준으로 나눠서 각각 <div>로 출력 */}
          {quiz.meaning.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>

        {/* 예시 영역 */}
        <div className="section-title">예시</div>
        <div className="section-box">
          {/* 정답 단어를 (     )로 치환하여 출력 */}
          {quiz.example.replace(quiz.answer, '(     )')}
        </div>

        {/* 뒤로가기 버튼 */}
        <button className="btn-back" onClick={onBack}>
          뒤로가기
        </button>
      </div>
    </div>
  );
}
