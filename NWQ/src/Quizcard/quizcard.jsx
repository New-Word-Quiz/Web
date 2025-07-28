// RetryScreen.jsx
import React from 'react';
// import '../../App.css';

function RetryScreen() {
   return (
      <div className="score-screen-wrapper">
         <div id="name-id">다시 시도 화면</div>
         <div id="mention">게임을 다시 시작하시겠습니까?</div>
         <div className="back-rectangle" />
         <div className="star star--big-tr" />
         <div className="star star--big-bl" />
         <div className="star star--small star--small" />
      </div>
   );
}

export default RetryScreen;