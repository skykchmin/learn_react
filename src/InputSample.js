import React, { useState } from 'react';

function InputSample(){
    const [text, setText] = useState('');
    const onChange = (e) => { // 이벤트 객체가 의미하는 것은 만약 이벤트가 수정이 발생했을 때 e 파라미터로 받는다
        setText(e.target.value); // target이 의미하는것은 e(이벤트)가 발생한 DOM의 정보를 가지고 있다.
    }

    const onReset = () => {
        setText('');
    }
    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;