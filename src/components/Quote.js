import React from 'react';

import * as S from '../styledComponents/quote'

import {quotes} from '../data/quotes';

const Quote = () => {
    console.log(quotes[(Math.random()*100)%quotes.length])
    let {quote,author} = quotes[(parseInt((Math.random()*100)%quotes.length))]
    return (
        <S.QuoteWrapper>
            <q>{quote}</q>   
            <p>~ {author}</p>
        </S.QuoteWrapper>
    );
};

export default Quote;