// 달팽이 배열 다시 한 번 만들기!

let size = 10;
let x = 0;
let y = 0;
let way = 0;
let ways = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let arr = [];
let count = 0;

let render = () => {
    console.clear();
    let brr = ['\n'];
    for(let i = 0; i < arr.length; i++) {
        brr.push(arr[i].join(''));
    }
    console.log(brr.join('\n'));
};

for(let i = 0; i < size; i++){
    arr.push([]);
    for(let j = 0; j < size; j++){
        arr[i].push('░░');
    }
}

render();

let setT = setInterval(() => {
    arr[y][x] = '██';
    render();
    if(x > size - count && x < 0) {
        
    }
}, 100);
