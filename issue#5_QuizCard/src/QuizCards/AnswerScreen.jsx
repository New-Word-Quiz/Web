import React from 'react';
import './AnswerScreen.css';

// AnswerScreen 컴포넌트: 퀴즈 정답 화면을 보여줌
export default function AnswerScreen({ quiz, selected, onNext, onHome, onExplain }) {
  // 선택한 답이 정답인지 여부 판단
  const isCorrect = selected === quiz.answer;

  return (
    <div className="answer-container">
      <div className="answer-card">

        {/* 정오답 표시: O 또는 X 아이콘 */}
        <div className={`ox-symbol ${isCorrect ? 'circle' : 'cross'}`}>
          {isCorrect ? 'O' : 'X'}
        </div>

        {/* 결과 텍스트 */}
        <div className="result-text">
          {isCorrect ? '정답입니다' : '오답입니다'}
        </div>

        {/* 퀴즈 관련 이미지 */}
        <img src={quiz.image} alt="quiz" className="quiz-image" />

        {/* 정답 텍스트 (단어) */}
        <div className="answer-text">{quiz.answer}</div>

        {/* 의미 섹션 */}
        <div className="section-title">의미</div>
        <div className="section-box">
          {/* 줄바꿈 문자 기준으로 의미 출력 */}
          {quiz.meaning.split('\n').map((line, i) => <div key={i}>{line}</div>)}
        </div>

        {/* 예시 문장 섹션 */}
        <div className="section-title">예시</div>
        <div className="section-box">
          {/* 줄바꿈 문자 기준으로 예시 출력 */}
          {quiz.example.split('\n').map((line, i) => <div key={i}>{line}</div>)}
        </div>

        {/* 하단 버튼 그룹: 홈, 다음, 해설 */}
        <div className="button-group">
          <button className="btn home" onClick={onHome}>홈</button>
          <button className="btn next" onClick={onNext}>다음</button>
          <button className="btn explain" onClick={onExplain}>해설</button>
        </div>
      </div>
    </div>
  );
}
