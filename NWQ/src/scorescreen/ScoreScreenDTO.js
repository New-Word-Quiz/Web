// ScoreScreenDTO.js 파일 (수정 제안)
class ScoreScreenDTO {
   constructor(id, username, score) { // user_id 대신 id, nickname 대신 username
          this.id = id;
          this.username = username;
          this.score = score;
     }

     getId() { // getUserId 대신 getId
          return this.id;
     }

     getUsername() { // getNickname 대신 getUsername
          return this.username;
     }

     getScore() {
          return this.score;
     }
}

export default ScoreScreenDTO;