!null //값을 뒤집는다
!!null //강제 형변환

null === false  //false
!null === true  //true
null + 123  //123
//null => math => 0

//선언했지만 값은 정의되지 않고 할당 X
let varb = null;

undefined + 10 //NaN  undefined는 숫자로 표현이 안된다. 

undefined == null   //true
undefined === null  //false
!undefined === !null  //true

//팀에서 비어있는 값은 undefined or null로 하자는 컨벤션이 있어야 한다.
//undefined => NaN , null => 0
//type undefined    Object


//eqeq 줄이기

'1' == 1 // type casting 형변환이 일어난다.
// == 동등연산자로 사용하는 것은 어떠한 오류를 일으킬 수 있기 때문에 지양해야 한다.
// 수동으로 형변환을 해주자


//형변환 주의하기
//사용자 -> 명시적인 변환 , JS -> 암묵적인 변환
//타입을 변환할 때 명시적으로 해줄 필요가 있다.(사람이 예측하기 쉽게)
11 + '문자와 결합' // 11 문자와 결합  => String(11 + '문자와 결합')

!!'문자열' //true => Boolean('문자열')
!!''     //false  => Boolean('')

parseInt('9.999', 10); //9  parseInt 2번째 값을 지정해주자 10진수로 하고싶으면 10


//isNaN

Number.MAX_SAFE_INTEGER //숫자로 표현할 수 있는 가장 큰 수
Number.isInteger  //정수인지 판별

isNaN //is Not A Number => 숫자가 아니다
//isNaN으로 하는건 굉장히 헷갈린다.
//isNaN 느슨하다
// Number.isNaN //엄격한 검사

Number.isNaN(123 + '테스트')  //false 이렇게 앞에 Number를 붙이는 것을 지향