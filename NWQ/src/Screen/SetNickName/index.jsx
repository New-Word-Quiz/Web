import { Link, useNavigate } from "react-router-dom"
import './SetNickName.css'
export default function SetNickName(){
    const navigate = useNavigate()
    return(
    <div className="nickname-card">
        <button className="nickname-back-button" onClick={() => navigate(-1)}>
        ←
        </button>
        <h1 className="nickname-title">닉네임 설정</h1>
        
            <input
                type="text"
            />
            <Link to="/start/quiz">
                <button type="submit" className="nickname-button" onClick={()=>alert("yes")}>시작</button>
            </Link>
        
    </div>
    )
}