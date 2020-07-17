import React from 'react';

function Wrapper({ children }){
    const style = {
        border: '2px solid black',
        padding: 16
    };

return <div style={style}>{children}</div> // wrapper에서는 children이라는 props를 사용했는데 children: 태그와 태그사이에 넣는 내용 
}

export default Wrapper;