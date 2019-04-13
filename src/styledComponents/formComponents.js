import styled from 'styled-components';
import bg from '../images/search.svg'
export let Form = styled.form`
    grid-column:2/3;
    grid-row:3/4;
    display:grid;
    grid-template-rows:1fr 36px 1fr;
    grid-template-columns:36px 6fr 36px;
`

export let Input = styled.input`
    grid-row:2/3;
    grid-column:2/3;
    border-radius:4px;
    font-size:1.2rem;
    border:none;
    text-align:center;
    &:hover{
        outline:none;
    }
`
export let Submit = styled.input`
    transform:translateX(-100%);
    border-radius:4px;
    width:36px;
    height:36px;
    background:white;
    border:none;
    grid-column:3/4;
    grid-row:2/3;
    background-image:url(${bg});
    background-size:contain;
    &:focus{
        outline:none;
        box-shadow: inset 0px 0px 5px rgba(0,0,0,0.5)
    }
`