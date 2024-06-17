// a ~ z를 계속 랜덤하게 뽑습니다.
// 만약 d가 뽑혔다면 obj에 key로 'd'를 추가하고, count를 넣고 count에 1을 더합니다.
// 만약 그 후에도 d 가 뽑혔다면 그냥 넘어갑니다.
// 만약 count가 26이면 while 문을 나옵니다.
// 예를 들어 obj는 다음과 같이 객체가 생성될 수 있습니다.
// { q: 0, i: 1, x: 2, d: 3, u: 4, j: 5, g: 6, z: 7, r: 8, a: 9, v: 10, k: 11, p: 12, o: 13, b: 14, h: 15, l: 16, e: 17, n: 18, f: 19, w: 20, y: 21, s: 22, c: 23, t: 24, m: 25 }
// 이 경우 결과는 다음과 같이 나와야 합니다.
// q, i, x, d, u, j, g, z, r, a, v, k, p, o, b, h, l, e, n, f, w, y, s, c, t, m
// while문 안쪽에서만 코딩하고, 코딩할 때 `in`을 꼭 써주세요. (key 확인)


/**///don't touch!!!////////////////**/
/**/let obj = {};///////////////////**/
/**/let aCode = 'a'.charCodeAt(0);//**/
/**/let zCode = 'z'.charCodeAt(0);//**/
/**/let count = 0;//////////////////**/
/**///don't touch!!!////////////////**/

while(true){
    let alpha = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    if(!(alpha in obj)){
        obj[alpha] = count;
        count++;
    }
    if(count === 26){
        break;
    }
}

/**///don't touch!!!///////////////////////**/
/**/let res = [];//////////////////////////**/
/**/let obj2 = Object.entries(obj);////////**/
/**/for(let i = 0; i < obj2.length; i++){//**/
/**//**/res[obj2[i][1]] = obj2[i][0];//////**/
/**/}//////////////////////////////////////**/
/**/console.log(res.join(', '));///////////**/
/**///don't touch!!!///////////////////////**/