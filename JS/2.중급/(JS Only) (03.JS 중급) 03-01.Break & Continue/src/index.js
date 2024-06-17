// 1부터 100까지의 숫자 중 짝수를 제외한 나머지 숫자들을 순서대로 출력하는데
// 6으로 나눴을 때 나머지가 1인 숫자가 10번 나오면 출력을 멈춰라.
// !!주의!! 꼭 for문의 조건은 `i <= 100` 으로 고정

let num = 0;
/* for문은 건들지 말 것! */
let total = 0;
for (let i = 1; i <= 100; i++){
    if(num + i % 6 == 1){
        console.log(num + i);   
        total = total + 1;
        if(total == 10){
            break;
        }
    }
}
