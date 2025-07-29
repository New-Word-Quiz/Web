// SettingsScreen.jsx
import React from 'react';

// import '../../App.css';

//import '../App.css';


function SettingsScreen() {
   return (
      <div className="score-screen-wrapper">
         <div id="name-id">설정 화면</div>
         <div id="mention">여기에서 설정을 변경할 수 있습니다.</div>
         <div className="back-rectangle" />
         <div className="star star--big-tr" />
         <div className="star star--big-bl" />
         <div className="star star--small star--small" />
      </div>
   );
}

export default SettingsScreen;