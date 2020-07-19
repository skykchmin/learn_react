import React, { useState } from 'react';

function InputSample(){ //여러개의 객체를 관리해줘야 한다.
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    const { name, nickname } = inputs; //비구조화할당을 통해 추출
    const onChange = (e) => {
        const { name, value } = e.target;

    setInputs({ //객체를 업데이트할 때는 기존 객체를 복사해야한다.
        ...inputs, //spread 연산자
        [name]: value, // 실제 []안에 무엇을 가르키고있는지에 따라 다른 key값이 변경된다 
    });
    }
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
    
    }
    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
               {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;