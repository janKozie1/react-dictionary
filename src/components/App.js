import React, { useState } from 'react';

import UserInput from './UserInput'
import Header from './Header'
import WordsContainer from './WordsContainer'

import * as S from '../styledComponents/all'



const App = () => {
    let [result, updateResult] = useState({
        data: [],
        type: null
    })
    return (
        <S.Wrapper>
            <S.GlobalStyle />
            <Header>
                <S.Heading>Find the definition of a word!</S.Heading>
                <UserInput updateResult={updateResult} />
            </Header>
            {
                result.type  ?
                    <WordsContainer data={result.data} type={result.type} />
                :
                null
                
            }
        </S.Wrapper>
    );
};

export default App;