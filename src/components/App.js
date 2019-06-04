import React, { useState, useEffect } from 'react';

import UserInput from './UserInput'
import Header from './Header'
import WordsContainer from './WordsContainer'
import Quote from './Quote'

import dictionary from '../api/dictionary_api';

import { validateQuery } from '../functions/validateQuery'
import { quotes } from '../data/quotes';

import * as S from '../styledComponents/main'

const App = () => {
    let [result, updateResult] = useState({
        data: [],
        type: ''
    })
    let [quoteObj] = useState(quotes[(parseInt((Math.random() * 100) % quotes.length))])
    let [query, updateQuery] = useState('');
    let [status, updateStatus] = useState('')
    let [queryToSend, updateQTS] = useState('');
    let fetchData = async (q) => {
        try{
            return await dictionary.get(q, {
                params: {
                    key: '7ef7e2ba-bcbc-4d10-9f6c-4e0062a57f9a'
                }
            }).catch(err => console.log(err))
        }
        catch(err){
            console.log(err)
        }
        
    }
    useEffect(() => {
        if (validateQuery(queryToSend)) {
            updateQuery(queryToSend)
            updateStatus('loading')
            try {
                fetchData(queryToSend).then((e) => {
                    updateStatus('done')
                    typeof e.data[0] === 'string' || !e.data[0] ? updateResult({ type: 'recom', data: e.data }) : updateResult({ type: 'definitions', data: e.data })
                }).catch(err => {
                    updateResult({ data: [], type: 'error' })
                })
            } catch (err) {
                updateResult({ data: [], type: 'error' })
            }

        }
    }, [queryToSend])
    return (
        <>
            <S.GlobalStyle />
            <Header>
                <S.Heading>Find the definition of a word!</S.Heading>
                <UserInput updateQTS={updateQTS} query={query} updateQuery={updateQuery} />
            </Header>
            <S.BodyContainer>
                {
                    status === 'loading' ?
                        <S.Loader><p>Loading...</p></S.Loader>
                        : result.type === 'error' ?
                            <h4>An unexpected error occured, please try again</h4>
                            :
                            result.type ?
                                <WordsContainer data={result.data} type={result.type} updateQTS={updateQTS} status={status} />
                                :
                                <Quote quoteObj={quoteObj} />
                }
            </S.BodyContainer>
       </>
    );
};

export default App;