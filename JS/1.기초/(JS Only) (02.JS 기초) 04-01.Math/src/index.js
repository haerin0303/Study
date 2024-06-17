// 두 숫자 a, b를 생성해주세요.
// a는 0 ~ 100 의 정수
// b는 2 ~ 7의 정수를 만들어주세요.
// 그 뒤에 a를 b로 나눈 몫과 나머지를 출력해주세요.

let a = (Math.floor(Math.random()*101));
let b = (Math.floor(Math.random()*6 + 2));
console.log(Math.floor(a / b));
console.log(a % b);
