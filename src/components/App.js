import React, { useState } from 'react';

import Word from './Word'
import UserInput from './UserInput'
import Header from './Header'
import * as S from '../styledComponents/all'



const App = () => {
    let [result, updateResult] = useState(null)
    return (
        <S.Wrapper>
            <S.GlobalStyle />
            <Header>
                <S.Heading>Translate</S.Heading>
                <UserInput updateResult={updateResult} />
            </Header>
            {
                result ? result.map((e, index) => {
                    return <Word data={e} key={index} />
                }) :
                    null
            }
        </S.Wrapper>
    );
};

export default App;