//알파벳을 셔플하고 100밀리초마다 랜덤 인덱스를 생성여 그 인덱스를 기준으로 배열을 나눠 출력하시오.
// ex) ['b', 'c', 'a'] 같이 섞이고 랜덤 인덱스가 1이면 ['b'], ['c', 'a']
const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let total = '';
setInterval (() => {
    for(let i = 0; i < 10; i++){
        let num = Math.floor(Math.random() * 10 - i) + i;
        let temp = arr[num];
        arr[num] = arr[i];
        arr[i] = temp;
    }
    let RandomIndex = Math.floor(Math.random()* 6)* 2;
    let total = arr.join(',');
    console.clear();
    console.log(`${total.slice(0,RandomIndex)}${'\n'}${total.slice(RandomIndex)}`);
}, 500);