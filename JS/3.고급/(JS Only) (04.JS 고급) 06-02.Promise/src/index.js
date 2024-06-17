// words 배열의 문자열들이 300ms 후에 각각 출력되도록 하시오.
// 단 setTimeout만을 써야하며, setTimeout에는 res 또는 resolve 하는 코드외에
// 다른 부분에는 어떠한 코드도 작성하면 안됩니다.

let words = [
    'apple', 'banana', 'cherry', 'date',
    'elderberry', 'fig', 'grape', 'honeydew',
    'kiwi', 'lemon', 'mango', 'nectarine',
    'orange', 'peach', 'quince', 'raspberry',
    'strawberry', 'tangerine', 'watermelon', 'yuzu'
];
let promise = new Promise(res => res())

for(let i = 0; i < words.length; i++){
    setTimeout(() => {
        promise = promise.then(() => new Promise((res) => {
            setTimeout(() => {
              console.log(words[i]);
              res();
            }, 300);
          }));
    })
}

promise.then(() => {
    setTimeout(() => {
        console.log("The End");
    }, 6400);
});