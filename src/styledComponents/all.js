import styled, { css, createGlobalStyle } from 'styled-components';


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
export let Wrapper = styled.div`
    height:100vh;
`

export let Header = styled.header`
    background:#303F9F;
    display:grid;
    text-align:center;
    grid-template-columns:1fr 5fr 1fr;
    grid-template-rows:1fr 2fr 3fr 1fr;
    height:40%;
    align-content:center;
    justify-items:center;
    box-shadow:0 0 5px rgba(0,0,0,0.5);
`

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
export let Heading = styled.h2`
    color:white;
    grid-column:2/3;
    grid-row:2/3;
    font-size:1.5rem;
    font-weight:normal;
    display:flex;
    justify-content:center;
`

export let BodyContainer = styled.div`
    display:grid;
    grid-template-columns:2fr 6fr 2fr;
    grid-row-gap:2em;
`
export let RecomContainer = styled.div`
    display:flex;
    grid-column:2/3;
    align-items:center;
    justify-content:center;
    width:100%;
    flex-direction:column;
    >header{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    >section{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
    }
`
export let Recom = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:2px 5px;
    border: 1px solid grey;
    border-radius:2px;
    margin:5px;
    cursor:grab;
`
export let WordsContainer = styled.div`
    display:grid;
    grid-column:2/3;
    grid-row-gap:1em;
`
export let Word = styled.div`

    padding:10px 20px;
    border-radius:5px;
    box-shadow:0px 0px 2px rgba(0,0,0,0.5);
    height:200px;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    justify-content:flex-start;
    &:first-child{
        margin-top:2em;
    }
`