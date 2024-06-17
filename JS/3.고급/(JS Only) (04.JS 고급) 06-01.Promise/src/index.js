// timeout 함수만을 이용해서 코드를 작성할 것
// setTimeout은 쓰면 안됩니다!
// 각 문자가 뜨는 간격은 모두 1초입니다.

/**
 * @param {string} message
 * @param {number} delay 
 * @returns 
 */
let timeout = (message, delay) => new Promise(res => setTimeout(() => res(message), delay));

timeout('문제입니다.', 1000)
  .then((message) => {
    console.log(message);
    return timeout('2명의 성시경이 밤에 다니면?', 1000);
  })
  .then((message) => {
    console.log(message);
    return timeout('1초', 1000);
  })
  .then((message) => {
    console.log(message);
    return timeout('2초', 1000);
  })
  .then((message) => {
    console.log(message);
    return timeout('3초', 1000);
  })
  .then(() => {
    console.log('정답: 야간투시경');
  });