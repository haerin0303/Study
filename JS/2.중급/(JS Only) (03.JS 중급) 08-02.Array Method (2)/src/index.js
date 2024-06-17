// 주문이 str 변수로 주어진다. 이 주문을 한데 모아 사과 a개, 귤 b개 ...과 같이 fruits 배열에 있는 과일 순서대로 전체 개수를 출력하는 프로그램을 만들어라.
let fruits = ["사과", "귤", "배", "참외", "감자", "토마토"];
let numbers = [0, 0, 0, 0, 0, 0];
let str =
  "토마토 2,사과 5,배 3,배 3,배 2,사과 7,사과 4,토마토 4,감자 2,사과 2,귤 2,귤 3,사과 3,배 5,귤 3,배 3,참외 6,참외 7,배 5,토마토 8,감자 6,배 8,토마토 7,토마토 6,감자 4,귤 3,배 7,귤 3,참외 8,감자 3";
let arr = str.split(",");
for (let i = 0; i < arr.length; i++) {
  let a = arr[i];
  let b = fruits.indexOf(a.split(" ")[0]);
  let c = Number(a.split(" ")[1]);
  numbers[b] += c;
}
let d = 0;
let e = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > e) {
    e = numbers[i];
    d = i;
  }
}
console.log(`가장 많이 주문받은 과일은 ${fruits[d]}입니다.`);
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i+1}번째 주문 => 과일 : ${fruits[i]}, 개수 : ${numbers[i]}개`);
}