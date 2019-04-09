import React from 'react';
import WordRecom from './WordRecom'
import * as S from '../styledComponents/all'

const WordsContainer = ({ data, type }) => {

    return (
        <S.WordsContainer>
            {
                type === 'recom' ?
                    <S.RecomContainer>
                        <header>
                            <h3>No results found!</h3>
                            <h4>Did you mean any of these words?</h4>
                        </header>
                        <section>
                            {data.map((e, index) => {
                                return <WordRecom data={e} key={index} />
                            })}
                        </section>

                    </S.RecomContainer>
                    :
                    null
            }
        </S.WordsContainer>
    );
};

export default WordsContainer;