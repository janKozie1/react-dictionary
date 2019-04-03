import styled, { css, createGlobalStyle   } from 'styled-components';


export let GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');  
    html{
        >body{
            font-family:'Roboto';
            min-height:100vh;
            padding:0;
            margin:0;
        }
    }
`

export let Form = styled.form`
    grid-column:2/3;
`
export let Header = styled.header`
    background:#303F9F;
    display:grid;
    grid-template-columns:1fr 5fr 1fr;
    height:50%;
    align-content:center;
    justify-items:center;
`
export let Wrapper = styled.div`
    height:100vh;
`

export let Input = styled.input`
    padding:5px 10px;
    border-radius:4px;
    border:none;
    text-aling:center;
    &:hover{
        outline:none;
    }
`

export let Heading = styled.h2`
    color:white;
    grid-column:2/3;
    font-size:1.5rem;
`