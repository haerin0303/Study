// 5개의 랜덤한 숫자를 만들어주세요.
// 랜덤한 숫자들의 범위는 1 ~ 256입니다.
// 5개의 랜덤한 숫자들을 보여주고
// 그 중 최댓값과 최솟값을 출력해주세요.

let x1 = (Math.floor(Math.random()*256 + 1));
let x2 = (Math.floor(Math.random()*256 + 1));
let x3 = (Math.floor(Math.random()*256 + 1));
let x4 = (Math.floor(Math.random()*256 + 1));
let x5 = (Math.floor(Math.random()*256 + 1));
console.log(`${x1}, ${x2}, ${x3}, ${x4}, ${x5}`);
console.log(`최대 : ${Math.max(x1, x2, x3, x4, x5)}`);
console.log(`최소 : ${Math.min(x1, x2, x3, x4, x5)}`);