// src/data/quizData.js
// 정답·해설 데이터 (meaning, example, explanations) 는 모두 백엔드 DB 에 보관 → 힌트/정답 제출 API 로 내려받아야해서 

const quizData = [
  {
    quiz_id: 1,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz1.png',
    options: [
      { option_id: 101, option_text: '점메추' },
      { option_id: 102, option_text: '혼밥' },
      { option_id: 103, option_text: '밥터디' },
      { option_id: 104, option_text: '밥약' }
    ]
  },
  {
    quiz_id: 2,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz2.png',
    options: [
      { option_id: 201, option_text: '넥슨넥카엔' },
      { option_id: 202, option_text: '네카라쿠베당토' },
      { option_id: 203, option_text: '빅테삼' },
      { option_id: 204, option_text: '삼엘하' }
    ]
  },
  {
    quiz_id: 3,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz3.png',
    options: [
      { option_id: 301, option_text: '킹받네' },
      { option_id: 302, option_text: '현타' },
      { option_id: 303, option_text: '억까' },
      { option_id: 304, option_text: '멘붕' }
    ]
  },
  {
    quiz_id: 4,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz4.png',
    options: [
      { option_id: 401, option_text: '구질구질하다' },
      { option_id: 402, option_text: '촌스럽다' },
      { option_id: 403, option_text: '구리다' },
      { option_id: 404, option_text: '짜치다' }
    ]
  },
  {
    quiz_id: 5,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz5.png',
    options: [
      { option_id: 501, option_text: '욜로' },
      { option_id: 502, option_text: '갓생' },
      { option_id: 503, option_text: '소확행' },
      { option_id: 504, option_text: '워라밸' }
    ]
  },
  {
    quiz_id: 6,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz6.png',
    options: [
      { option_id: 601, option_text: '갑분싸' },
      { option_id: 602, option_text: '갑툭튀' },
      { option_id: 603, option_text: '현타' },
      { option_id: 604, option_text: '멘붕' }
    ]
  },
  {
    quiz_id: 7,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz7.png',
    options: [
      { option_id: 701, option_text: '패피' },
      { option_id: 702, option_text: '얼죽코' },
      { option_id: 703, option_text: '꾸안꾸' },
      { option_id: 704, option_text: '슬세권' }
    ]
  },
  {
    quiz_id: 8,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz8.png',
    options: [
      { option_id: 801, option_text: '찐텐' },
      { option_id: 802, option_text: '오열' },
      { option_id: 803, option_text: '억까' },
      { option_id: 804, option_text: '현타' }
    ]
  },
  {
    quiz_id: 9,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz9.png',
    options: [
      { option_id: 901, option_text: '댓글부대' },
      { option_id: 902, option_text: '성지순례' },
      { option_id: 903, option_text: '급발진' },
      { option_id: 904, option_text: '드립' }
    ]
  },
  {
    quiz_id: 10,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz10.png',
    options: [
      { option_id: 1001, option_text: '현웃' },
      { option_id: 1002, option_text: '팩폭' },
      { option_id: 1003, option_text: '노잼' },
      { option_id: 1004, option_text: '뇌절' }
    ]
  },
  {
    quiz_id: 11,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz11.png',
    options: [
      { option_id: 1101, option_text: '내또출' },
      { option_id: 1102, option_text: '혼코노' },
      { option_id: 1103, option_text: '혼밥' },
      { option_id: 1104, option_text: '이생망' }
    ]
  },
  {
    quiz_id: 12,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz12.png',
    options: [
      { option_id: 1201, option_text: '푸드파이터' },
      { option_id: 1202, option_text: '소울푸드' },
      { option_id: 1203, option_text: 'Sexy Food' },
      { option_id: 1204, option_text: '음잘알' }
    ]
  },
  {
    quiz_id: 13,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz13.png',
    options: [
      { option_id: 1301, option_text: '국룰' },
      { option_id: 1302, option_text: '암묵적 룰' },
      { option_id: 1303, option_text: '노룰' },
      { option_id: 1304, option_text: '선넘' }
    ]
  },
  {
    quiz_id: 14,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz14.png',
    options: [
      { option_id: 1401, option_text: '낄끼빠빠' },
      { option_id: 1402, option_text: '눈치게임' },
      { option_id: 1403, option_text: '존버' },
      { option_id: 1404, option_text: '손절' }
    ]
  },
  {
    quiz_id: 15,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz15.png',
    options: [
      { option_id: 1501, option_text: '넘사벽' },
      { option_id: 1502, option_text: '압도적' },
      { option_id: 1503, option_text: '갓생' },
      { option_id: 1504, option_text: '갑질' }
    ]
  },
  {
    quiz_id: 16,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz16.png',
    options: [
      { option_id: 1601, option_text: '머선129' },
      { option_id: 1602, option_text: '오우야' },
      { option_id: 1603, option_text: '헐' },
      { option_id: 1604, option_text: '빼박캔트' }
    ]
  },
  {
    quiz_id: 17,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz17.png',
    options: [
      { option_id: 1701, option_text: '꾸안꾸' },
      { option_id: 1702, option_text: '얼죽코' },
      { option_id: 1703, option_text: '패피' },
      { option_id: 1704, option_text: '슬세권' }
    ]
  },
  {
    quiz_id: 18,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz18.png',
    options: [
      { option_id: 1801, option_text: '썰' },
      { option_id: 1802, option_text: '뇌피셜' },
      { option_id: 1803, option_text: '팩폭' },
      { option_id: 1804, option_text: '사바사' }
    ]
  },
  {
    quiz_id: 19,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz19.png',
    options: [
      { option_id: 1901, option_text: '느좋' },
      { option_id: 1902, option_text: '반반무많이' },
      { option_id: 1903, option_text: '킹정' },
      { option_id: 1904, option_text: '스불재' }
    ]
  },
  {
    quiz_id: 20,
    quiz_text: '그림이 설명하는 신조어는?',
    image_url: '/images/quiz20.png',
    options: [
      { option_id: 2001, option_text: '솔까말' },
      { option_id: 2002, option_text: '팩폭' },
      { option_id: 2003, option_text: '쌉가능' },
      { option_id: 2004, option_text: '노잼' }
    ]
  }
];

export default quizData;
