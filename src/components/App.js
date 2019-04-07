import React, { useState } from 'react';

import Word from './Word'
import UserInput from './UserInput'
import Header from './Header'
import * as S from '../styledComponents/all'



const App = () => {
    let [result, updateResult] = useState([])
    return (
        <S.Wrapper>
            <S.GlobalStyle />
            <Header>
                <S.Heading>Find the definition of a word!</S.Heading>
                <UserInput updateResult={updateResult} />
            </Header>
            {
                result.length ? result.map((e, index) => {
                    return index
                }) :
                    null
            }
        </S.Wrapper>
    );
};

export default App;