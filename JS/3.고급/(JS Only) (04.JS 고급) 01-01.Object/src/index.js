// obj에는 키가 a ~ z 까지 들어가 있으며 각 value는 0으로 초기화됩니다.
// 이 때, setInterval에서 매번 a ~ z 사이의 문자를 랜덤하게 뽑습니다. (String.fromCharCode를 잘 사용)
// 만약 'd' 를 뽑았다면 obj에서 key가 'd'인 값을 찾아서 1을 누적해주세요.
// 그리고 그 결과를 a:0 ; b:0 ; c:0 ; d:1 ; ... ; z:0 이런식으로 값과 함께 출력되도록 해주세요.
// 만약 규칙이 이해가 안되면 질문 채널에 꼭 질문하세요.
// (이상하게 코딩하지 말고!!!)

let obj = {};

let aCode = 'a'.charCodeAt(0);
let zCode = 'z'.charCodeAt(0);

for(let i = aCode; i <= zCode; i++){
    obj[String.fromCharCode(i)] = 0;
}

setInterval(() => {
    let alpha = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    obj[alpha] += 1;
    console.clear();
    console.log(Object.entries(obj).map(([key, value]) => `${key}:${value}`).join(' ; '));
}, 100);
