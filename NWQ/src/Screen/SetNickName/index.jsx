import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './SetNickName.css';
import { useState } from 'react';

export default function SetNickName() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');  // 닉네임 저장 상태
        {/*닉네임 전송후 받은 유저ID를 로컬저장소에 저장*/}
    // const handleSubmit = () => {
    //     axios.post('http://localhost:5000/user', {
    //         nickname  // nickname: nickname 과 동일
    //     })
    //     .then((response) => {
    //         console.log('서버 응답:', response.data);
    //         localStorage.setItem('userID',response.data.session_id)
    //         navigate('/start/quiz');  // 성공시 이동

    //     })
    //     .catch((error) => {
    //         console.error('에러 발생:', error);  // 에러 처리
    //     });
    // };

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
            // onClick={handlesubmit}
            onClick={()=>{
                navigate('/start/quiz');
                console.log(nickname);}}
            >
                시작
            </button>
        </div>
    );
}
