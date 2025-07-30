// ScoreScreenDTO.js 파일을 임포트합니다.
import ScoreScreenDTO from './ScoreScreenDTO.js';

// 1. 서버에서 데이터를 받았다고 가정한 가상 데이터 (백엔드 DTO 필드명에 맞춤)
const mockServerData = {
     id: 1, // 백엔드 DTO의 'id' 필드
     username: '테스트유저', // 백엔드 DTO의 'username' 필드
     score: 85 // 백엔드 DTO의 'score' 필드
};

// 2. 이 가상 데이터를 사용하여 ScoreScreenDTO 인스턴스를 생성합니다.
// (ScoreScreenDTO.js를 위에서 제안한 대로 수정했다면, 생성자 인자가 id, username, score가 됩니다.)
const userScoreDTO = new ScoreScreenDTO(
   mockServerData.id,
   mockServerData.username,
   mockServerData.score
);

console.log("--- test.js: ScoreScreenDTO 객체 생성 확인 ---");
console.log("생성된 DTO 객체:", userScoreDTO); // ScoreScreenDTO 객체가 출력됩니다.

console.log("DTO에서 ID 가져오기 (getId()):", userScoreDTO.getId());
console.log("DTO에서 사용자 이름 가져오기 (getUsername()):", userScoreDTO.getUsername());
console.log("DTO에서 점수 가져오기 (getScore()):", userScoreDTO.getScore());


// 3. JavaScript DTO 객체(userScoreDTO)를 JSON 문자열로 변환합니다.
const jsonStringFromDTO = JSON.stringify(userScoreDTO);

console.log("\n--- test.js: DTO 객체를 JSON 문자열로 변환 확인 ---");
console.log("JSON 문자열:", jsonStringFromDTO); // JSON 형식의 문자열이 출력됩니다.


// 4. (선택 사항) JSON 문자열을 다시 JavaScript 객체로 파싱합니다.
const parsedObjectFromJson = JSON.parse(jsonStringFromDTO);

console.log("\n--- test.js: JSON 문자열을 다시 JavaScript 객체로 파싱 확인 ---");
console.log("파싱된 객체:", parsedObjectFromJson); // 일반 JavaScript 객체가 출력됩니다.
console.log("파싱된 객체에서 ID:", parsedObjectFromJson.id);
console.log("파싱된 객체에서 사용자 이름:", parsedObjectFromJson.username);
console.log("파싱된 객체에서 점수:", parsedObjectFromJson.score);