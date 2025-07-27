// QuizCard.jsx — 퀴즈 화면 구성 컴포넌트
import React from 'react';
import './QuizCard.css';
import { useNavigate } from 'react-router-dom'; // ✅ 라우팅을 위한 useNavigate 훅 가져오기

export default function QuizCard({ quiz, onAnswer }) {
  const colors = ['pink', 'lightyellow', 'lightblue', 'lightgreen']; // 보기 버튼 색상 배열
  const optionLabels = ['가', '나', '다', '라']; // 보기에 붙는 한글 라벨
  const navigate = useNavigate(); // ✅ 다른 화면으로 이동할 수 있도록 하는 함수

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {/* 퀴즈 타이틀과 서브타이틀 */}
        <div className="quiz-title">신조어 퀴즈</div>
        <div className="quiz-subtitle">그림이 설명하는 신조어는?</div>

        {/* 퀴즈 이미지 */}
        <img src={quiz.image} alt="quiz" className="quiz-image" />

        {/* 퀴즈 보기 옵션들 */}
        <div className="quiz-options">
          {quiz.options.map((option, idx) => (
            <button
              key={idx}
              className={`option-button ${colors[idx]}`} // 색상 클래스 추가
              onClick={() => onAnswer(option)} // 선택 시 부모로 선택한 보기 전달
            >
              {/* 라디오 스타일 원 */}
              <span className="radio-circle" />
              {/* 보기 텍스트 (가. 보기내용 형식) */}
              <span className="option-text">
                {optionLabels[idx]}. {option}
              </span>
            </button>
          ))}
        </div>

        {/* ✅ 도움말 버튼 - 클릭 시 /help 경로로 이동 */}
        <div className="help-button-container">
          <button className="btn-help" onClick={() => navigate('/help')}>
            도움말
          </button>
        </div>
      </div>
    </div>
  );
}
