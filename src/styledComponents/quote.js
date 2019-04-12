import styled from 'styled-components';

export let QuoteWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
    font-family: 'Open Sans Condensed',cursive;
    display:grid;
    grid-column:2/3;
    grid-template-columns:3fr minmax(min-content,5fr) 3fr;
    grid-template-rows:100px minmax(auto,3fr) 6fr;
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
