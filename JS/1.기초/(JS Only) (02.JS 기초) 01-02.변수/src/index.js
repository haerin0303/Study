// 숫자를 쓰지 말고 단순히 변수의 할당만을 사용해서 a, b, c, d, e를 다음과 같이 바꾸시오.
// a <- c, b <- d, c <- e, d <- a, e <- b

let a = 30;
let b = 40;
let c = 50;
let d = 60;
let e = 70;
console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

// 여기에 코드 작성
let temp = a
let temp1 = b
a = c; 
b = d; 
c = e; 
e = b; 
d = a; 
d = temp; 
e = temp1;

console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

