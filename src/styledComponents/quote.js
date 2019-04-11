import styled from 'styled-components';

export let QuoteWrapper = styled.div`
    /* @import url('https://fonts.googleapis.com/css?family=Dancing+Script'); */
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
    min-height:60%;
    font-family: 'Open Sans Condensed',cursive;
    display:grid;
    grid-template-columns:3fr 6fr 3fr;
    grid-template-rows:2fr 3fr 6fr;
    >q{
        font-size:1.4rem;
        font-weight:300;
        font-style:italic;
        display:block;
        grid-column:2/3;
        grid-row:2/3;
        align-self:end;
    }
    >p{
        align-self:flex-end;
        grid-column:2/3;
        grid-row:3/4;
        align-self:start;
        justify-self:end;
        font-style:italic;
        font-size:1.1rem;

    }
`
