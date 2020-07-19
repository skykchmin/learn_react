import React, { useState } from 'react';


function Counter(){
    const [number, setNumber] = useState(0); // 비구조화 할당을 통해 number라는 상태를 만들텐데 상태를  파라미터값: 0으로 하겠다, setnumber는 상태를 바꿔주겠다 
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onclick={onIncrease}>+1</button>
            <button onclick={onDecrease}>+1</button>
        </div>
    )
}


export default Counter;