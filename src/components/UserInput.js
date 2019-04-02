import React, { useState } from 'react';
import dictionary from '../api/dictionary_api'
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
        sendRequest(query).then(e=>updateResult(e));
        updateQuery('');
    }
    return (
        <form className='user-input container' onSubmit={(e)=>onFormSubmit(e)}>
            <input className='user-input input' type='text' value={query} onChange={(e)=>updateQuery(e.target.value)} />
        </form>
    );
};

export default UserInput;