// 0.5초 간격으로 1 ~ 4가 나오다가 다음에는 1 ~ 6이 나오고, 그 다음에는 1 ~ 8이 나오도록 하자.
// 각각 초기화될 때마다 console.clear()를 쓴다.

let count = 0;
let way = 0;
setInterval(() => {
  ccount = count + 1;
  console.log(count);
  if (count === 4 && way === 0) {
    console.clear();
    count = 0;
    way = 1;
  } else if (count === 6 && way === 1) {
    console.clear();
    count = 0;
    way = 2;
  } else if (count === 8 && way === 2) {
    console.clear();
    count = 0;
    way = 0;
  }
}, 500);
