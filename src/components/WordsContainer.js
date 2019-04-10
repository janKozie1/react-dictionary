import React from 'react';

import WordRecom from './WordRecom'
import WordDef from './WordDef'

import * as S from '../styledComponents/all'

const WordsContainer = ({ data, type, updateQTS, status }) => {

    return (
        <S.BodyContainer>
            {
                status === 'loading' ?
                    <S.Loader>Loading...</S.Loader>
                    :
                    type === 'recom' ?
                        <S.RecomContainer>
                            <header>
                                <h3>No results found!</h3>
                                <h4>Did you mean any of these words?</h4>
                            </header>
                            <section>
                                {data.map((e, index) => {
                                    return <WordRecom data={e} key={index} updateQTS={updateQTS} />
                                })}
                            </section>

                        </S.RecomContainer>
                        : type ?
                        <S.WordsContainer>
                            {
                                data.map((e, index) => {
                                    return <WordDef data={e} key={index} />
                                })
                            }
                        </S.WordsContainer>
                        :
                        null

            }
        </S.BodyContainer>
    );
};

export default WordsContainer;