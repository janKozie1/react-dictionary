import React, { useState, useEffect } from 'react';

import UserInput from './UserInput'
import Header from './Header'
import WordsContainer from './WordsContainer'

import dictionary from '../api/dictionary_api';

import {validateQuery} from '../functions/validateQuery'

import * as S from '../styledComponents/all'



const App = () => {
    let [result, updateResult] = useState({
        data: [],
        type: null
    })
    let [queryToSend,updateQTS] = useState('');
    let fetchData = async(q)=>{
         return await dictionary.get(q, {
            params: {
                key: '7ef7e2ba-bcbc-4d10-9f6c-4e0062a57f9a'
            }
        })
    }
    useEffect(()=>{
        if(validateQuery(queryToSend)){
            fetchData(queryToSend).then((e)=>{
                typeof e.data[0] === 'string' ? updateResult({type:'recom', data:e.data}): updateResult({type:'definitions', data:e.data})
            })
        }
    },[queryToSend])

    return (
        <S.Wrapper>
            <S.GlobalStyle />
            <Header>
                <S.Heading>Find the definition of a word!</S.Heading>
                <UserInput updateQTS={updateQTS} />
            </Header>
            {
                result.type  ?
                    <WordsContainer data={result.data} type={result.type} updateQTS={updateQTS}/>
                :
                null            
            }
        </S.Wrapper>
    );
};

export default App;