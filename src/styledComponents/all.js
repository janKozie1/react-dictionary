import styled, { css, createGlobalStyle,keyframes } from 'styled-components';

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

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
    position: relative;
    
`


export let Loader = styled.div`
    grid-column:2/3;
    width: 64px;
    height: 64px;
    position:absolute;
    left:0;
    right:0;
    margin:auto;
    margin-top:20%;
    &:after{
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        margin-top:20px;
        border-radius: 50%;
        border: 3px solid #303F9F;
        border-color: #303F9F transparent #303F9F transparent;
        animation: ${rotate} 1.2s linear infinite;
    }

`
export let RecomContainer = styled.div`
    display:flex;
    grid-column:2/3;
    align-items:center;
    justify-content:center;
    width:100%;
    flex-direction:column;
    text-align:center;
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
    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }
`
export let WordsContainer = styled.div`
    display:grid;
    grid-column:2/3;
    grid-row-gap:1em;
    margin:2em 0;
    grid-template-columns:1fr 1fr;
    grid-column-gap:1em;
    @media (max-width:760px){
        grid-template-columns:1fr
    }
`
export let Word = styled.div`
    border-radius:5px;
    box-shadow:0px 0px 2px rgba(0,0,0,0.5);
    border:1px dashed black;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    justify-content:flex-start;
    padding:10px 15px 20px 15px;

`

export let WordHeader = styled.h4`
    font-size:1.2rem;
    margin:0;
    padding:0;
    
    &::first-letter{
        text-transform:uppercase;
    }
    >span{
        font-weight:200;
        font-size:0.8rem;
        font-style:italic;
        color:grey;
    }
`
export let DateSpan = styled.p`
    font-size:0.7rem;
    font-weight:200;
    margin:0;
`

export let Definition = styled.p`
    margin:0;

`
