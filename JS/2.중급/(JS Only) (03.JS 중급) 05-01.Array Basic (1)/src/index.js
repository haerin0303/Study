// 문자열의 홀수 번째만 가져와 거꾸로 출력하세요.
// for문을 사용해서 구현할 것.
const str = "abcdefghij";
let total = "";
for(let i = 0; i < str.length; i++){
    if(i % 2 == 0){
        total = str[i] + total;
    }
}
console.log(total);