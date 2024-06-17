// setInterval를 사용해서 초 카운트를 합니다.
// 만약 10초가 된다면 setInterval이 삭제되도록 하세요.

let count = 0;

let set = setInterval(() => {
    count = count + 1
    console.log(`${count}초`);
    if(count == 10){
        clearInterval(set);
    }
}, 1000);
