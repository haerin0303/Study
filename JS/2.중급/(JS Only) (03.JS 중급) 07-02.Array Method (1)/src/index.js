// 문장이 주어졌을 때 단어만 뒤집어서 출력해라.
// ex) My name is Apple 입력하면 yM eman si elppA 출력해야함.
// 스트링 메소드 사용하면 안됨.
let arr = [];
let str = "My name is Apple";
let word = "";

for (let i = str.length - 1; i >= 0; i--) {
  word += str[i];
}

console.log(word);