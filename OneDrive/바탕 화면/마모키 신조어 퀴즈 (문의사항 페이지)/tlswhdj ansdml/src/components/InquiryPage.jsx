import React from 'react';
import './InquiryPage.css';

const InquiryPage = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="inquiry-wrapper">
      <div className="inquiry-card">
        <button className="back-button" onClick={handleBack}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="inquiry-title">문의사항</h1>
        <p className="inquiry-text">
          문의사항이나 오류 신고는<br />
          <span className="inquiry-email">000@gmail.com</span><br />
          로 문의 주세요
        </p>
      </div>
    </div>
  );
};

export default InquiryPage;
