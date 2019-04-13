import React, { useState } from 'react';

import * as S from '../styledComponents/formComponents';


const UserInput = ({ updateQTS, query, updateQuery }) => {
    let onFormSubmit = (e) =>{
        e.preventDefault();
        updateQTS(query);
    }
    return (
        <S.Form onSubmit={(e)=>onFormSubmit(e)}>
            <S.Input type='text' value={query} onChange={(e) => updateQuery(e.target.value)} />
            <S.Submit type='submit' value=''/>
        </S.Form>
    );
};

export default UserInput;