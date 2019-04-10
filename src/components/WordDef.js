import React from 'react';

import * as S from '../styledComponents/all'

const Word = ({data}) => {
    console.log(data)
    let formatData = (data) =>{
        return {
            word:data.hwi?data.hwi.hw.replace(/\*/g,"•"):'',
            date:data.date ? data.date.indexOf('{')!==-1?data.date.substring(0,data.date.indexOf('{')) :  data.date:'No date',
            grFunction:data.fl,
            shortdef:data.shortdef[0]?data.shortdef.map((e)=>e.replace(/^[—–]/g,"")):[`${data.cxs[0].cxl} ${data.cxs[0].cxtis[0].cxt}`],
        }
    }
    let fData = formatData(data);
    return (
        <S.Word>
            <S.WordHeader>{fData.word} {fData.grFunction? <span>  ({fData.grFunction})</span>:null}</S.WordHeader>
            <S.DateSpan>{fData.date}</S.DateSpan>
            {
                fData.shortdef.map((e,index)=>{
                    return <S.Definition key={index}>{index+1} - {e}</S.Definition>
                })
            }
        </S.Word>
    );
};

export default Word;