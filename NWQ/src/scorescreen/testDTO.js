// testDTO.js 파일 (수정 제안)
class testDTO {
   constructor(status, message, nickname, score) { // user_id 대신 id, nickname 대신 username
         this.status = 1;
         this.message = "대단한걸";
         this.nickname = "이게 뭐지";
         this.score = 80;
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

export default testDTO;

