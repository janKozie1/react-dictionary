import React from 'react';

import WordRecom from './WordRecom'
import WordDef from './WordDef'

import * as S from '../styledComponents/body'

const WordsContainer = ({ data, type, updateQTS }) => {
    return (
        <S.Wrapper>
            {
                type === 'recom' ?
                    <S.RecomContainer>
                        <header>
                            <h3>No results found!</h3>
                            {
                                data.length ? 
                                <h4>Did you mean any of these words?</h4>
                                :
                                null
                            }
                            
                        </header>
                        <section>
                            {data.map((e, index) => {
                                return <WordRecom data={e} key={index} updateQTS={updateQTS} />
                            })}
                        </section>

                    </S.RecomContainer>
                    :
                    <S.WordsContainer >
                        <S.WordColumn>
                            {
                                data.map((e, index) => {
                                    return !(index%2) ? 
                                     <WordDef data={e} key={index} only={data.length === 1} />
                                     :
                                     null
                                })
                            }
                        </S.WordColumn>
                        <S.WordColumn>
                            {
                                data.map((e, index) => {
                                    return (index%2) ? 
                                     <WordDef data={e} key={index} only={data.length === 1} />
                                     :
                                     null
                                })
                            }
                        </S.WordColumn> 
                    </S.WordsContainer>

            }
        </S.Wrapper>
    );
};

export default WordsContainer;