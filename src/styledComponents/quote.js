import styled,{keyframes} from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`

export let QuoteWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
    font-family: 'Open Sans Condensed',cursive;
    
    grid-column:2/3;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    animation: ${fadeIn} 0.5s ease-in;
    
    >q{
        font-size:1.4rem;
        font-weight:300;
        font-style:italic;
        display:block;
        width:100%;
        text-align:center;
       
    }
    >p{
        font-style:italic;
        font-size:1.1rem;
        width:100%;
        text-align:right;
    }
    @media (max-width:760px){
        grid-template-columns:auto;
    }
    
`

