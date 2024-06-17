// 숫자와 소문자로 이루어진 문자열을 섞은 다음
// 숫자가 두 번 연속해서 나온 부분이 있으면
// 해당 "n번째에 숫자가 두번 연속해서 나옴"을 출력하고 검색을 끝내라.
let str = '0123456789abcdefghijklmnopqrstuvwxyz';
let to = "";
let len = str.length;
let arr = str.split('');

for(let i = 1; i <= len; i++){
    let a = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[a] = arr[a];
    arr[a] = temp;
}

to = arr.join('');
console.log(to);

for(let i = 0; i < to.length; i++){
    if(to[i] >= '0' && to[i] <= '9' && i > 0 && to[i - 1] >= '0' && to[i - 1] <= '9'){
        console.log(`${i}번째에 숫자가 두 번 연속해서 나옴.`);
    }
}