// 결과가 어떻게 보이는지는 dist/index.js 파일을 node로 실행시켜볼 것

let power = n => {
  let total = '';
  for(let i = n; i < 10; i++) total += i;
  for(let i = 0; i < n; i++) total += i;
  return total;
};
let count = 0;

setInterval(() => {
  for(let i = 0; i < 4; i++) {
    let a = power((count + i) % 10);
    console.log(a);
    if(i == 3){
      console.log(' ');
    }
  }
  count++
}, 100);

