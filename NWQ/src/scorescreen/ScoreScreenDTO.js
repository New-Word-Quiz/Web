// ScoreScreenDTO.js 파일 (수정 제안)
class ScoreScreenDTO {
   constructor(user_id, nickname, score) { // user_id 대신 id, nickname 대신 username
          this.user_id = user_id;
          this.nickname = nickname;
          this.score = score;
     }

     getId() { // getUserId 대신 getId
          return this.user_id;
     }

     getUsername() { // getNickname 대신 getUsername
          return this.nickname;
     }

     getScore() {
          return this.score;
     }
}

export default ScoreScreenDTO;