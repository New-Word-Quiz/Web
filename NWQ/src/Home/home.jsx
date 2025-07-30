// HomeScreen.jsx
import React from 'react';

// import '../../App.css';

//import '../App.css';


function HomeScreen() {
   return (
      <div className="score-screen-wrapper">
         <div id="name-id">홈 화면</div>
         <div className="back-rectangle" />
         <div className="star star--big-tr" />
         <div className="star star--big-bl" />
         <div className="star star--small star--small" />
      </div>
   );
}

export default HomeScreen;