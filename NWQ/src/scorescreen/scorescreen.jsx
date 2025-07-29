import { useState } from 'react';
import './scorescreen.css';
import 만점이미지 from '../image/킹갓벽.png';
import Star from '../image/Star.png';
import { Link } from 'react-router-dom';

function Scorescreen() {
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
         <div id="name-id">플레이어님!</div>
         <div id="mention">참 잘 했어요</div>
         <div id="now-score">100</div>
         <div id="basic-score">/100</div>

         <img className="image" src={만점이미지} alt="만점 이미지" />

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