// 100ms마다 1부터 100까지의 랜덤 숫자를 생성하고 출력한다.
// 만약 숫자가 3, 10, 30이라면 '!!'를 추가로 출력하고, 49, 70, 89라면 콘솔창을 지운다
// ps. console.clear() 함수의 경우 안에 인자를 넣어 호출하여도 잘 작동된다.
const arr = [3, 10, 30, 49, 70, 89];
const method = ["log", "log", "log", "clear", "clear", "clear"];
setInterval(() => {
    let num = Math.floor(Math.random()* 100 + 1);
    console.log(num);
    if(num == arr[0] || num == arr[1] || num == arr[2]){
        console.log('!!');
    }
    if(num == arr[3] || num == arr[4] || num ==arr[5]){
        console.clear();
    }
    }, 100);