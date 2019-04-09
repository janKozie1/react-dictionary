import React from 'react';

import * as S from '../styledComponents/all'

const Word = ({data}) => {
    console.log(data)
    let formatData = (data) =>{
        return {
            date:data.date ? data.date.indexOf('{')!==-1?data.date.substring(0,data.date.indexOf('{')) + ' century' :  data.date:'',
            grFunction:data.fl,
            shortdef:data.shortdef
        }
    }
    let fData = formatData(data);

    return (
        <S.Word>
            <p>{fData.date}</p>
            <p>{data.fl}</p>
            <p>{data.shortdef[0]}</p>
        </S.Word>
    );
};

export default Word;