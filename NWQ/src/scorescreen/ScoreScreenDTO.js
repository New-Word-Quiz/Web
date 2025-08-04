// ScoreScreenDTO.js 파일 (수정 제안)
class ScoreScreenDTO {
   constructor(status, message, nickname, score) { // user_id 대신 id, nickname 대신 username
          this.status = status;
          this.message = message;
          this.nickname = nickname;
          this.score = score;
     }

     status() { // getUserId 대신 getId
          return this.status;
     }

     message() {
          return this.message;
     }

     getUsername() { // getNickname 대신 getUsername
          return this.nickname;
     }

     getScore() {
          return this.score;
     }
}

export default ScoreScreenDTO;
