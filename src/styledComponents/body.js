import styled,{keyframes} from 'styled-components';

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

export let WordsContainer = styled.div`
    display:grid;
    grid-column:2/3;
    grid-row-gap:1em;
    grid-template-columns:1fr 1fr;
    grid-column-gap:1em;
    @media (max-width:760px){
        grid-template-columns:1fr
    }
`

export let WordColumn = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
    
    flex-direction:column;
`

export let Wrapper = styled.div`
    grid-column:2/3;
   
    display:grid;
    grid-template-columns:2fr 6fr 2fr;
    grid-row-gap:2em;
    position: relative;
    @media (max-width:760px){
        grid-template-columns:1fr 6fr 1fr;
    }
    
`

