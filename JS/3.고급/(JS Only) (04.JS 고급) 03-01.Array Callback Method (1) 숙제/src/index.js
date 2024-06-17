// for, while, forEach는 사용하지 말 것.
// 과제 1: 1부터 15까지의 숫자를 포함하는 배열을 만들고 각 요소를 3배하세요.
// 과제 2: 과제 1에서 만든 배열을 사용하여 20보다 큰 숫자만 포함하는 새 배열을 만드세요.
// 과제 3: 1과 20 사이의 10개의 무작위 숫자 배열을 만들고, map 함수를 사용하여 각 요소에서 5를 뺀 배열을 만드세요.
let arr = Array(15).fill(0).map((v , i) => i + 1);
let j = v => v * 3;
let brr = arr.map(j);
console.log(brr.join(','));

let even = v => v > 20;
let crr = brr.filter(even);
console.log(crr.join(','));

let drr =  Array(10).fill().map(() => Math.floor(Math.random() * 20) + 1).map(num => num - 5);
console.log(drr.join(',')); 