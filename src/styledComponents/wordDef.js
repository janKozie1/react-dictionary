import styled,{css} from 'styled-components';

export let Word = styled.div`
    border-radius:5px;
    box-shadow:0px 0px 3px rgba(0,0,0,0.5);
    height:max-content;
    border:1px dashed black;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    justify-content:flex-start;
    padding:10px 15px 20px 15px;
    margin-bottom:8px;
    &:last-child{
        margin:0;
        
    }
    ${props => props.only && css`
        transform:translateX(50%);
        @media (max-width:760px){
            transform:translateX(0%);
        }
       
    `}

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
