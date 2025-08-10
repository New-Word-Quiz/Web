import { useNavigate } from "react-router-dom";
import './SetNickName.css';
import { useState } from 'react';
import { submitNicknameApi } from "../../hooks/useUserSubmit.js";
import ErrorMSG from "../../Components/errorMSG/index.jsx";

export default function SetNickName() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [errorMSG, setErrorMSG] = useState(false);

    const handleSubmit = async () => {
        // ✅ 1. 새로운 변수에 공백 제거한 값을 할당
        const trimmedNickname = nickname.trim();
        
        // ✅ 2. 명세서에 맞게 1~5자 유효성 검사
        if (trimmedNickname.length < 1 || trimmedNickname.length > 5) {
            setErrorMSG(true);
            return; // 유효성 검사 실패 시 함수 종료
        }

        try {
            // ✅ 3. API에 공백 제거한 값을 객체 형태로 전송
            await submitNicknameApi({ nickname: trimmedNickname });
            navigate('/start/quiz');
        } catch (error) {
            console.error(error);
            navigate('/'); 
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
                // ✅ 4. 입력 시 에러 메시지 초기화로 UX 개선
                onChange={(e) => {
                    setNickname(e.target.value);
                    setErrorMSG(false);
                }}
                placeholder="닉네임을 입력하세요 (1~5자)"
            />
            {/* 에러 상태일 때만 ErrorMSG 컴포넌트 렌더링 */}
            {errorMSG && <ErrorMSG />}
            <button
                type="submit"
                className="nickname-button"
                onClick={handleSubmit}
            >
                시작
            </button>
        </div>
    );
}