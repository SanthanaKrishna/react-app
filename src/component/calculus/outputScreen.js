import React from 'react';


export const Results = (props) => {
    let { result = "" } = props;

    return (
        <div className="result">
            <p>{result}</p>
        </div >
    )
}

