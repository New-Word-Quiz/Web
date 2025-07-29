import { useState, useEffect } from 'react';
import './scorescreen.css';
import Star from '../image/Star.png';
import { Link } from 'react-router-dom';
import ScoreImage from './scoreimage';

function Scorescreen() {

   const[score, setScore] = useState(0);
   const [playerName, setPlayerName] = useState("플레이어"); // 플레이어 이름 상태 추가, 기본값은 "플레이어"

   // 컴포넌트가 마운트될 때 점수와 플레이어 이름을 설정합니다.
   useEffect(() => {
      // **이 부분에 백엔드에서 점수와 플레이어 이름을 가져오는 실제 로직을 넣으세요.**
      // 예시 (Fetch API 사용):
      // fetch('/api/getUserData') // 예시 API 엔드포인트
      //    .then(res => res.json())
      //    .then(data => {
      //       setScore(data.finalScore); // 백엔드에서 받은 최종 점수
      //       setPlayerName(data.userName || "플레이어"); // 백엔드에서 받은 사용자 이름 (없으면 기본값)
      //    })
      //    .catch(error => console.error('데이터 가져오기 오류:', error));

      // 현재는 테스트를 위해 무작위 점수와 가상 플레이어 이름을 생성합니다.
      const fetchedScore = Math.floor(Math.random() * 101); // 0부터 100까지의 무작위 점수
      setScore(fetchedScore); // 점수 상태 업데이트

      const fetchedPlayerName = "테스트"; // 예시 플레이어 이름
      setPlayerName(fetchedPlayerName); // 플레이어 이름 상태 업데이트

   }, []); // 빈 배열은 이 useEffect가 컴포넌트가 처음 렌더링될 때 한 번만 실행됨을 의미합니다.


   const handleRetryClick = () => {
      console.log('다시하기 버튼 클릭');
   };

   const handleHomeClick = () =>  {
      console.log('홈 버튼 클릭');
   };

   const handleSettingClick = () =>  {
      console.log('설정 버튼 클릭');
   };

   return (
      <>
         <div id="name-id">{playerName}님!</div>

         <ScoreImage score={score} />

         <div id="now-score">{score}</div>
         <div id="basic-score">/100</div>

         <Link to="/quiz" className="retry-button" onClick={handleRetryClick}>
            <span>다시하기</span>
         </Link>

         {/* div를 Link 컴포넌트로 변경하고 to prop에 경로 지정 */}
         <Link to="/home" className="home-button" onClick={handleHomeClick}>
            <span>홈</span>
         </Link>

         {/* div를 Link 컴포넌트로 변경하고 to prop에 경로 지정 */}
         <Link to="/settings" className="setting-button" onClick={handleSettingClick}>
            <span>설정</span>
         </Link>
            
         <div className='back-rectangle'></div>

         <img src={Star} className="star star--big-tr" alt="큰 별" />
         <img src={Star} className="star star--big-bl" alt="큰 별"/>
         <img src={Star} className="star star--small star--small-1" alt="작은 별"/>
         <img src={Star} className="star star--small star--small-2" alt="작은 별"/>
         <img src={Star} className="star star--small star--small-3" alt=" 별"/>
      </>
   )
}

export default Scorescreen;