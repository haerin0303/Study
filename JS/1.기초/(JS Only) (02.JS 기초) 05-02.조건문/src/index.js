// year 은 1부터 9999까지의 정수가 랜덤으로 할당된다.
// month 는 1부터 12까지의 정수가 랜덤으로 할당된다.
// flag 는 윤년인지 아닌지의 여부가 할당된다.
// 윤년은 year가 (4의 배수고 100의 배수가 아님) 이거나 (400의 배수) 면 윤년이다.
// flag 는 윤년이면 true, 아니면 false가 할당된다.
// day와 flag를 제외한 다른 변수는 다른 값을 할당하는 등 수정하면 안된다.

/**/////////////////////////////////////////////////////////////////////**/
/**/let minY = 1;///////////////////////////////////////////////////////**/
/**/let maxY = 9999;////////////////////////////////////////////////////**/
/**/let minM = 1;///////////////////////////////////////////////////////**/
/**/let maxM = 12;//////////////////////////////////////////////////////**/
/**/////////////////////////////////////////////////////////////////////**/
/**/let year = Math.floor(Math.random() * (maxY - minY + 1)) + minY;////**/
/**/let month = Math.floor(Math.random() * (maxM - minM + 1)) + minM;///**/
/**/let day = 31;///////////////////////////////////////////////////////**/
/**/////////////////////////////////////////////////////////////////////**/

/** @type {boolean} */
let flag;

/**/////////////////////////////////////////////////////////////////////**/
/**/let yun = '고,';////////////////////////////////////////////////////**/ //1 3 5 7 8 10 12  31
/**/if(flag){///////////////////////////////////////////////////////////**/ //4 6 9 11         30
/**//**/yun = ' 아니고,';///////////////////////////////////////////////**/
/**/}///////////////////////////////////////////////////////////////////**/
/**/////////////////////////////////////////////////////////////////////**/

month = Math.floor(Math.random()*12 + 1);
        if( month % 2 == 0 && month !== 2 && month < 9){
            day = 30;
        }else if( month % 2 == 1 && month !== 2 && month >= 9){
            day = 30;
        }else if( month % 2 == 1 && month !== 2 && month < 8){
            day = 31;
        }else if( month % 2 == 0 && month !== 2 && month >= 8){
            day = 31;
        }
if(year%4 == 0 && year%100 !== 0 || year%400 == 0){
    yun = '고';
    if(month = 2){
        day = 29;
    }
}else{
    yun = ' '+'아니고';
    if(month = 2){
        day = 28;
    }
}


console.log(`${year}년은 윤년이${yun} ${year}년 ${month}월은 ${day}일까지 있습니다.`);