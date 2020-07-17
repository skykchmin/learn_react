import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/> 
      {/* hello 컴포넌트에 react라는 name을 작성, 그다음 Hello 컴포넌트를 작성 */}
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;
