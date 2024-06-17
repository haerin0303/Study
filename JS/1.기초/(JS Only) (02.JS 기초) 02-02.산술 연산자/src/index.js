// hello world ; world hello   라는 글자를 각각 + 와 Template Literal을 사용해서 console에 출력하세요.
// 단 영단어를 추가로 쓰면 안되며, 띄어쓰기까지 전부 고려해야합니다.

let h = 'hello';
let w = 'world';

// 코드 작성
console.log(h + " " + w + " " + ";" + " " + h + " " + w);
console.log(`${h} ${w} ; ${h} ${w}`);