import { useState, useEffect } from 'react';
import './scorescreen.css'; //
import Star from '../image/Star.png';
import { Link } from 'react-router-dom';
import ScoreImage from './scoreimage'; //

function Scorescreen() {
   const [score, setScore] = useState(0); //
   const [playerName, setPlayerName] = useState("플레이어"); //

   useEffect(() => {
      // 실제 유저 ID (예: 로그인된 사용자 ID). 일단 1로 고정합니다.
      const userId = 1; 

      // 기능 명세서에 따른 "최근 점수 조회" API 엔드포인트 사용
      fetch(`http://localhost:8080/users/${userId}/score/recent`) 
         .then(res => {
            if (!res.ok) {
               throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json(); // 서버에서 받은 JSON 응답을 JavaScript 객체로 변환
         })
         .then(data => {
            // 백엔드 ScoreScreenDTO.java의 필드명 (id, username, score)에 맞춰 사용
            console.log("scorescreen.jsx: 서버로부터 받은 데이터:", data);

            setScore(data.score); // 'score' 필드 사용
            setPlayerName(data.username || "플레이어"); // 'username' 필드 사용 (DTO에 맞춰)
         })
         .catch(error => {
            console.error('scorescreen.jsx: 데이터 가져오기 오류:', error);
            setScore(0);
            setPlayerName("데이터 로드 실패");
         });

   }, []);

   // ... (나머지 코드 동일)
   const handleRetryClick = () => { /* */ console.log('다시하기 버튼 클릭'); };
   const handleHomeClick = () =>  { /* */ console.log('홈 버튼 클릭'); };
   const handleSettingClick = () =>  { /* */ console.log('설정 버튼 클릭'); };

   return ( //
      <>
         <div id="name-id">{playerName}님!</div>
         <ScoreImage score={score} />
         <div id="now-score">{score}</div>
         <div id="basic-score">/100</div>
         <Link to="/quiz" className="retry-button" onClick={handleRetryClick}><span>다시하기</span></Link>
         <Link to="/home" className="home-button" onClick={handleHomeClick}><span>홈</span></Link>
         <Link to="/settings" className="setting-button" onClick={handleSettingClick}><span>설정</span></Link>
         <div className='back-rectangle'></div>
      </>
   );
}

export default Scorescreen;