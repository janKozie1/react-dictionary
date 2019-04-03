import React, { useState } from 'react';
import styled from 'styled-components'
import dictionary from '../api/dictionary_api';

import * as S from '../styledComponents/all';

const UserInput = ({updateResult}) => {
    let [query,updateQuery] = useState('');

    let sendRequest = async(term) => {
        return  await dictionary.get(term, {
            params: {
                key: '7ef7e2ba-bcbc-4d10-9f6c-4e0062a57f9a'
            }
        })
    }
    let onFormSubmit = (e) =>{
        e.preventDefault();
        sendRequest(query).then(e=>updateResult(e.data));
        updateQuery('');
    }

    return (
        <S.Form onSubmit={(e)=>onFormSubmit(e)}>
            <S.Input type='text' value={query} onChange={(e)=>updateQuery(e.target.value)} />
        </S.Form>
    );
};

export default UserInput;