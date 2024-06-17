// 길이 8짜리 배열을 만들고, 구구단이 나오도록 하시오.
// forEach문을 두 개만 사용 (for, while 금지)
// 힌트 : push, join 사용, 문자는 \t을 사용

let arr = Array(9).fill(0);
arr.forEach((_, i) => {
    let row = [];
    for (let j = 2; j <= 9; j++) {
      row.push(`${j} * ${i + 1} = ${j * (i + 1)}`);
    }
    arr[i] = row.join('\t');
});

arr.forEach((v) => console.log(v));
