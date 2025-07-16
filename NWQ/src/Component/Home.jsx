import React from "react";

import star from "../assets/star_icon.svg";
import title from "../assets/Title.svg";
import "./Home.css";

function Home(){
return (
    <div className="home-screen">
        <div className="content-wrapper"> {/* 전체 콘텐츠를 감싸는 래퍼 */}
        {/* 타이틀 SVG 이미지 */}
        <img src={title} alt="신조어 퀴즈" className="main-title-svg" />

        {/* 시작하기 버튼 */}
        <div className="start-button-group">
            <button className="main-button start-button">시작하기</button>
        </div>

        {/* 설정 및 문의하기 버튼 그룹 */}
        <div className="sub-button-group">
            <button className="main-button setting-button">설정</button>
            <button className="main-button contact-button">문의하기</button>
        </div>
        </div>
    </div>
    );
}

export default Home;