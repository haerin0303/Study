// ██████████
//  █████████
//   ████████
//    ███████
//     ██████
//      █████
//       ████
//        ███
//         ██
//          █
// 위처럼 출력하시오.

let size = 10;
let brr = ['\n'];
for(let i = 0; i < size; i++){
    let arr = [];
    let count = i + 1;
    for(let j = i; j < size; j++){
        if(j <= count){
          arr.push(' ');
        }else{
          arr.push('█');
        }
    }
    brr.push(arr.join(''));
}
console.log(brr.join('\n'));;