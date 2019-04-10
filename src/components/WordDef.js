import React from 'react';

import * as S from '../styledComponents/all'

const Word = ({data}) => {
    console.log(data)
    let formatData = (data) =>{
        return {
            word:data.hwi?data.hwi.hw:'',
            date:data.date ? data.date.indexOf('{')!==-1?data.date.substring(0,data.date.indexOf('{')) :  data.date:'No date',
            grFunction:data.fl,
            shortdef:data.shortdef,

        }
    }
    let fData = formatData(data);

    return (
        <S.Word>
            <h4>{fData.word} <span> - {fData.grFunction}</span></h4>
            <p>{fData.date}</p>
            <p>{fData.shortdef[0]}</p>
        </S.Word>
    );
};

export default Word;