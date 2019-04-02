import React from 'react';

const Word = ({data}) => {
    console.log(data)
    return (
        <div>
            <p>{data.date}</p>
            <p>{data.fl}</p>
            <p>{data.shortdef[0]}</p>
        </div>
    );
};

export default Word;