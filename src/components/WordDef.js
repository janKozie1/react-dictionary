import React from 'react';

import {formatData} from '../functions/formatData'

import * as S from '../styledComponents/wordDef'

const Word = ({ data,only }) => {
    let fData = formatData(data);
    let { word, date, grFunction, shortdef } = fData;
    return (
        <S.Word only={only}>
            <S.WordHeader>{word} {grFunction ? <span>  ({grFunction})</span> : null}</S.WordHeader>
            <S.DateSpan>{date}</S.DateSpan>
            {
                shortdef.map((e, index) => {
                    return <S.Definition key={index}>{index + 1} - {e}</S.Definition>
                })
            }
        </S.Word>
    );
};

export default Word;