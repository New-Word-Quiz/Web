// React 라이브러리 import
import React from 'react';

// CSS 파일 import (해설 화면 전용 스타일)
import './AnswerExplain.css';

// AnswerExplain 컴포넌트 정의
export default function AnswerExplain({ quiz, onBack }) {
  // 보기 앞에 붙일 라벨 (가, 나, 다, 라)
  const optionLabels = ['가', '나', '다', '라'];

  return (
    <div className="explain-container">
      {/* 해설 카드 전체 박스 */}
      <div className="explain-card">

        {/* 해설 제목 */}
        <h2 className="explain-title">해설</h2>

        {/* 보기 + 각 보기의 해설 출력 */}
        {quiz.options.map((option, index) => (
          <div key={index} className="explain-item">
            {/* 보기 문항 (예: 가. OO) */}
            <div className="explain-option">
              {optionLabels[index]}. {option}
            </div>

            {/* 해당 보기에 대한 해설 말풍선 형식 */}
            <div className="explain-bubble">
              {/* quiz.explanations 배열이 있다면 해당 index의 해설 표시, 없으면 '해설 없음' */}
              {quiz.explanations?.[index] || '해설 없음'}
            </div>
          </div>
        ))}

        {/* 돌아가기 버튼 (이전 화면으로 이동) */}
        <button className="btn-back" onClick={onBack}>돌아가기</button>
      </div>
    </div>
  );
}
