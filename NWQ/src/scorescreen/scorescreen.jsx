import { useState } from 'react';
import './scorescreen.css';
import 만점이미지 from './image/만점이요.png';



function Scorescreen() {
   return (
      <>
         <div id="user-name"> 플레이어님!</div>

         <div id="mention"> 참 잘 했어요</div>
         <div id="now-score"> 100</div>
         <div id="basic-score"> /100</div>

         <img id="image" src={만점이미지} />

         <div className="retry-button">
         <span>다시하기</span>
         </div>

         <div className="home-button">
         <span>홈</span>
         </div>

         <div className="setting-button">
         <span>설정</span>
         </div>

         {/* 흰 배경 네모 */}
      <div className="back-rectangle" />

      {/* 큰 별 2개 */}
      <div className="star star--big-tr" />
      <div className="star star--big-bl" />
      {/* 작은 별 3개 (각각 다른 클래스명으로 CSS에서 개별 위치 조정을 용이하게 함) */}
      <div className="star star--small star--small-1" />
      <div className="star star--small star--small-2" />
      <div className="star star--small star--small-3" />
      </>
   )
}

export default Scorescreen;


