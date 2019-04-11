import styled,{createGlobalStyle} from 'styled-components';

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

export let Heading = styled.h2`
    color:white;
    grid-column:2/3;
    grid-row:2/3;
    font-size:1.5rem;
    font-weight:normal;
    display:flex;
    justify-content:center;
`