import React from 'react';

import * as S from '../styledComponents/quote'

const Quote = ({quoteObj}) => {
    
    let {quote,author} = quoteObj;
    return (
        <S.QuoteWrapper>
            <q>{quote}</q>   
            <p>~ {author}</p>
        </S.QuoteWrapper>
    );
};

export default Quote;