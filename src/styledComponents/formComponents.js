import styled from 'styled-components';

export let Form = styled.form`
    grid-column:2/3;
    grid-row:3/4;
    display:flex;
    align-items:center;
`

export let Input = styled.input`
    padding:10px 5px;
    border-radius:4px;
    font-size:1.2rem;
    border:none;
    text-align:center;
    &:hover{
        outline:none;
    }
`