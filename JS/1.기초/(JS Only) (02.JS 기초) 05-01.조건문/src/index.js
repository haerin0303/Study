// num이라는 변수가 -2, -1, 0, 1, 2 중 하나의 숫자가 할당되게 하세요.
// 만약 num이 0보다 작으면 'num이 0보다 작습니다.' (num 부분엔 숫자를 써주세요.)
// 만약 num이 0보다 크면 'num이 0보다 큽니다.' (num 부분엔 숫자를 써주세요.)
// 만약 num이 0이면 'num은 0입니다.' (num 부분엔 숫자를 써주세요.) 로 출력해주세요.
// if ~ else if ~ else 기법을 써서 풀어주세요.
let num = Math.floor(Math.random()*5 -2);
if(num < 0 ){
    console.log(`${num}이 0보다 작습니다.`);
}
else if(num > 0){
    console.log(`${(num)}이 0보다 큽니다.`);
}
else{
    console.log(`${(num)}은 0입니다.`);
}
