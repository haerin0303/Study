// 100ms마다 1부터 9까지의 숫자를 랜덤 생성하여 길이 10짜리 배열을 만든다.
// 이 배열이 숫자 9를 포함하고 있으면 "ㅁ번째에 9가 있습니다!" 를 출력하고 아니면 "9가 없습니다"를 출력한다.

let total = '';
setInterval(() => {
  while (total.length < 10) {
    let i = Math.floor(Math.random() * 9 + 1);
    total += i;
  }
  if (total.includes('9')) {
    console.log(`${total.indexOf('9')}번째에 9가 있습니다!`);
  } else {
    console.log(`9가 없습니다`);
  }
  total = '';
}, 100);






