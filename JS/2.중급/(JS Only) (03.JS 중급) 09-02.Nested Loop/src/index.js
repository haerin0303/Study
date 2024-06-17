// 랜덤으로 좌표를 중복되지 않게 5개 생성한다.
// 그 좌표에 있는 네모를 ██로 바꾸고 300ms마다 좌표가 계속 생성되게 하라.

let size = 10;
let arr = [];
let cor = [];
let x = 0;
let y = 0;
let render = () => {
  let brr = ['\n'];
  for(let i = 0; i < arr.length; i++){
      brr.push(arr[i].join(''));
  }
  return brr.join('\n');
};

for(let i = 0; i < size; i++){
  arr.push([]);
  for(let j = 0; j < size; j++){
      arr[i].push('░░');
      cor.push([i, j]);
  }
}

let setT = setInterval(() => {
  if (cor.length === 0 || cor.length < 5) {
    clearInterval(setT);

    return;
  }

  let pick = Math.floor(Math.random() * cor.length);
  let [x, y] = cor[pick];
  arr[x][y] = '██';
  cor.splice(pick, 1);
  
  console.log(render());
}, 100);