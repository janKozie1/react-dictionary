import React from 'react';

import * as S from '../styledComponents/all'

const WordRecom = ({data,updateQTS}) => {
    return (
        <S.Recom onClick={()=>updateQTS(data)}>
            {data}
        </S.Recom>
    );
};

export default WordRecom;