import styled,{createGlobalStyle,keyframes} from 'styled-components';

export let GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');  
    html{
        width:100%;
        >body{
            font-family:'Roboto';
            min-height:100vh;
            width:100%;
            padding:0;
            margin:0;
            position:absolute;
        }
    }
`
export let Wrapper = styled.div`
    min-height:100vh;
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
    width:100%;
    @media (max-width:760px){
        grid-template-columns:1fr 6fr 1fr;
    }
    >h4{
        grid-column:2/3;
        text-align:center;
        color:#FF5252;
        padding-top:20%;
    }
`


const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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