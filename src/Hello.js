import React from 'react';

// function Hello(props){ // name이라는 값을 사용하고 싶다면 함수에서 props라는 값을 가져온다, props라는 파라미터는 넣어준 값들이 객체형태로 들어가있다.    
// return <div style={{ //중괄호가 2개인 이유: 하나는 자바스크립트 값(객체), 하나는 객체를 감싸고, 
//     color:props.color
//     }}>안녕하세요{props.name}</div>; //react라는 값을 컴포넌트에서 보여주고 싶다하면 js에서 rendering하고싶으면 {} 을 사용
// }

function Hello({color, name}){ // Hello 컴포넌트는 props라는 값을 파라미터를 통해 받을수 있는데 비구조화 할당을 통해 바로 추출할 수 있다.
    return <div style={{
        color
    }}>안녕하세요 {name}</div>
}

Hello.defaultProps = { //props의 전달을 까먹었을 떄 기본값 지정
    name: '이름없음'
};
export default Hello;