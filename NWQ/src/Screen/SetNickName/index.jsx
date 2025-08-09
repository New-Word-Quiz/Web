import { useNavigate } from "react-router-dom";
import './SetNickName.css';
import { useState } from 'react';
import {submitNicknameApi} from "../../hooks/useUserSubmit.js";

export default function SetNickName() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');  // 닉네임 저장 상태
        {/*닉네임 전송후 받은 세션 쿠키 저장*/}
    const handleSubmit = async () => {
        try {
            await submitNicknameApi(nickname); // API 함수는 요청만 보냄
            navigate('/start/quiz');         // 요청 성공 시, 컴포넌트가 직접 페이지 이동
            
        } catch (error) {
            console.error(error);
            navigate('/');                   // 요청 실패 시, 컴포넌트가 직접 페이지 이동
        }
    };

    return (
        <div className="nickname-card">
            <button className="nickname-back-button" onClick={() => navigate(-1)}>
                ←
            </button>
            <h1 className="nickname-title">닉네임 설정</h1>
            <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임을 입력하세요"
            />
            <button type="submit"
            className="nickname-button" 
            onClick={handleSubmit}
            // onClick={()=>{
            //     navigate('/start/quiz');
            //     console.log(nickname);}}
            >
                시작
            </button>
        </div>
    );
}
