import { useState, useEffect } from 'react';
import './scorescreen.css'; //
import Star from '../image/Star.png';
import { Link } from 'react-router-dom';
import ScoreImage from './scoreimage'; //

import TestDTO from "./testDTO"; //테스트용 더미 데이터

function Scorescreen() {
   const [score, setScore] = useState(0); //
   const [playerName, setPlayerName] = useState("플레이어"); //

   useEffect(() => {
      // 테스트용 DTO 객체 생성
      const testData = new TestDTO();

      // DTO에서 값 추출
      setScore(testData.getScore());
      setPlayerName(testData.getUsername());
   }, []); //실제 호출하는 fetch로 변경

   /* 실제 호출하는 fetch
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
         // 백엔드 ScoreScreenDTO의 필드명에 맞춰 매핑
         const mappedData = {
         status: data.id,
         message: data.message || "",
         nickname: data.username,
         score: data.score
      };

      console.log("서버로부터 받은 매핑된 데이터:", mappedData);

      setScore(mappedData.score);
      setPlayerName(mappedData.nickname || "플레이어");
   })
   .catch(error => {
      console.error('데이터 가져오기 오류:', error);
      setScore(0);
      setPlayerName("플레이어");
   });
}, []);
*/

   const handleRetryClick = () => { /* */ console.log('다시하기 버튼 클릭'); };
   const handleHomeClick = () =>  { /* */ console.log('홈 버튼 클릭'); };
   const handleSettingClick = () =>  { /* */ console.log('설정 버튼 클릭'); };

   return ( 
      <>
         {/* 유저 이름 */}
         <div id="name-id">{playerName}님!</div>

         {/* 현재 점수 */}
         <ScoreImage score={score} />

         {/* 점수 */}
         <div id="now-score">{score}</div>
         <div id="basic-score">/100</div>

         {/* 다시하기 */}
         <Link to="/quiz" className="retry-button" onClick={handleRetryClick}>
         <span>다시하기</span></Link>

         {/* 홈으로 이동 */}
         <Link to="/home" className="home-button" onClick={handleHomeClick}><span>홈</span></Link>

         {/* 설정으로 이동 */}
         <Link to="/settings" className="setting-button" onClick={handleSettingClick}><span>설정</span></Link>
         <div className='back-rectangle'></div>
      </>
   );
}

export default Scorescreen;