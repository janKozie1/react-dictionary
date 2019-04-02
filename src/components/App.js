import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Word from './Word'
import UserInput from './UserInput'



const App = ({ className, children }) => {
    let [result, updateResult] = useState(null)
    console.log(result)
    return (
        <div className={className}>
            <UserInput updateResult={updateResult} />
            {
                result ? result.map((e,index) => {
                    return <Word data={e} key={index}/>
                }) :
                    null
            }
        </div>
    );
};

const styledApp = styled(App)`
    background:red;
    padding:20px
`
export default styledApp;