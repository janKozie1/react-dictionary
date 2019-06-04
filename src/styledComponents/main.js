import styled,{createGlobalStyle,keyframes} from 'styled-components';

export let GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');  
    html{
        
        min-height:100%;
        font-family:'Raleway','sans-serif';
        overflow-y: auto;
        >body{
            position:absolute;
            height:1px;
            min-height:100%;
            width:100%;
            padding:0;
            margin:0;
            #root{
                height:1px;
                min-height:calc(100% - 200px);
            }
        }   
        *,*::after,*::before{
            box-sizing:border-box;
        } 
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
    height:1px;
    margin-top:200px;
    padding-top:20px;
    min-height:100%;
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
    position:relative;
    left:0;
    right:0;
    margin:auto;
    margin-top:20%;
    &:after{
        content: " ";
        display: block;
        position:absolute;
        width: 46px;
        height: 46px;
        left:calc(50% - 23px);
        margin: 1px;
        margin-top:20px;
        border-radius: 50%;
        border: 3px solid #303F9F;
        border-color: #303F9F transparent #303F9F transparent;
        animation: ${rotate} 1.2s linear infinite;
    }

`