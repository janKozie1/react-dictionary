import React from 'react';

import * as S from '../styledComponents/wordRecom'

const WordRecom = ({ data, updateQTS }) => {
    return (
        <S.Recom onClick={() => updateQTS(data)}>
            {data}
        </S.Recom>
    );
};

export default WordRecom;