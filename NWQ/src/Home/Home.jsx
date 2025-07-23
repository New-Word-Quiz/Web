import React from "react";
import { Routes, Route, Link} from 'react-router-dom';
import title from "../assets/Title.svg";
import "./Home.css";

function Home(){
return (
    <div className="home-screen">
        <div className="content-wrapper"> {/* 전체 콘텐츠를 감싸는 래퍼 */}
        {/* 타이틀 SVG 이미지 */}
        <img src={title} alt="신조어 퀴즈" className="main-title-svg" />

        {/* 시작하기 버튼 */}
        <div className="start-button-group" >
            <Link to={'/quiz'}>
                <button className="main-button start-button">시작하기</button>
            </Link>
        </div>

        {/* 설정 및 문의하기 버튼 그룹 */}
        <div className="sub-button-group">
            <Link to={'/settings'}>
                <button className="main-button setting-button" >설정</button>
            </Link>
            <Link to={'/requests'}>
                <button className="main-button contact-button">문의하기</button>
            </Link>
        </div>
        </div>
    </div>
    );
}

export default Home;