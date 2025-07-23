import { useState } from 'react';
import './scorescreen.css';
import 만점이미지 from '../image/만점이요.png';
import Star from '../image/Star.png';
import { useNavigate } from 'react-router-dom';

function Scorescreen() {
   const navigate = useNavigate();

   const handleRetryClick = () => {
      console.log('다시하기 버튼 클릭');
      navigate('/quiz');
   };

   const handleHomeClick = () =>  {
      console.log('홈 버튼 클릭');
      navigate('/home');
   };

   const handleSettingClick = () =>  {
      console.log('설정 버튼 클릭');
      navigate('/settings');
   };

   return (
      <>
         <div>
            <div id="name-id"> 플레이어님!</div>
            <div id="mention"> 참 잘 했어요</div>
            <div id="now-score"> 100</div>
            <div id="basic-score"> /100</div>
         </div>

         <img id="image" src={만점이미지} />

         <div className="retry-button" onClick={handleRetryClick}>
         <span>다시하기</span>
         </div>

         <div className="home-button" onClick={handleHomeClick}>
         <span>홈</span>
         </div>

         <div className="setting-button" onClick={handleSettingClick}>
         <span>설정</span>
         </div>

         {/* 흰 배경 네모 */}
      <div className="back-rectangle" />

      {/* 큰 별 2개 */}
      {/* <img src={Star} className="star star--big-tr" alt="큰 별" />
      <img src={Star} className="star star--big-bl" alt="큰 별"/> */}
      {/* 작은 별 3개 (각각 다른 클래스명으로 CSS에서 개별 위치 조정을 용이하게 함) */}
      {/* <img src={Star} className="star star--small star--small-1" alt="작은 별"/>
      <img src={Star} className="star star--small star--small-2" alt="작은 별"/>
      <img src={Star} className="star star--small star--small-3" alt=" 별"/> */}
      </>
   )
}

export default Scorescreen;