//  ■■■■■■■■
// ■ ■■■■■■ ■
// ■■ ■■■■ ■■
// ■■■ ■■ ■■■
// ■■■■  ■■■■
// ■■■■  ■■■■
// ■■■ ■■ ■■■
// ■■ ■■■■ ■■
// ■ ■■■■■■ ■
//  ■■■■■■■■
// 위와 같이 출력하세요
// 위 도형은 10 x 10의 너비를 갖고 있습니다.

/* 단, for문의 초기값과 조건은 건들지 마세요. */
let total = '';
for (let i = 0; i < 100; i++) {
    let r = i % 10;
    if(r === 0) total += '\n';
    if(i % 11 === 0 || i % 9 === 0){
        total += ' ';
        continue;
    }
    total += '■';
}
console.log(total);