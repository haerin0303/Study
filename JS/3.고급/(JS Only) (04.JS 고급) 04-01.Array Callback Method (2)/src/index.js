// for, while, forEach 사용 금지
// 코드 작성 부분에만 코드 작성
// 과제 1 : 다음 숫자 배열에서 홀수의 합만을 출력하세요.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumOfOdds = arr.reduce((acc, cur) => {
  if(cur % 2 == 1) {
    return acc + cur;
  }
  return acc;
}, 0);

console.log(`홀수들의 합: ${sumOfOdds}`);

// 과제 2 : 다음 문장의 역순 문장을 만드세요.
let sentence = "안녕하세요 저는 자바스크립트를 가르치는 선생님입니다";
let words = sentence.split(" ");

let reversedSentence = words.reduceRight((acc, cur) => {
  return (`${acc + cur} `);
}, "");

console.log(`역순 문장: ${reversedSentence}`);

// 과제 3 : 다음 배열에서 symbol 속성을 기준으로 오름차순으로 정렬해주세요.
let elements = [
  {
    "fullName": "Hydrogen",
    "symbol": "H"
  },
  {
    "fullName": "Helium",
    "symbol": "He"
  },
  {
    "fullName": "Lithium",
    "symbol": "Li"
  },
  {
    "fullName": "Beryllium",
    "symbol": "Be"
  },
  {
    "fullName": "Boron",
    "symbol": "B"
  },
  {
    "fullName": "Carbon",
    "symbol": "C"
  },
  {
    "fullName": "Nitrogen",
    "symbol": "N"
  },
  {
    "fullName": "Oxygen",
    "symbol": "O"
  },
  {
    "fullName": "Fluorine",
    "symbol": "F"
  },
  {
    "fullName": "Neon",
    "symbol": "Ne"
  }
];

elements.sort((a, b) => {
  let ind = a.symbol.localeCompare(b.symbol);
  if(ind === 0) return a.symbol - b.symbol
  return ind;
});

console.log(elements.map(v => `fullName : ${v.fullName}, symbol : ${v.symbol}`).join('\n'));