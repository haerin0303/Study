// 시장에 가면 ~도 있고, ~도 있고, ~도 있고를 출력하는 프로그램을 만들어보자.
// 상품들의 순서는 랜덤으로 정해진다.
// 단, splice 함수와 join 함수를 이용하여 문제를 풀어야함.
let goods_list = ["사과", "바나나", "콜라", "피자", "김치", "칫솔"];
let arr = [];
let res = [];
for(let i = 0; i < 6; i++){
    arr.push(i);
}
for(let i = 0; i < 6; i++){
    let num = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    res.push(goods_list[num]);
}
let list = res.join(`도 있고, `);
console.log(`시장에 가면 ${list}도 있고`);