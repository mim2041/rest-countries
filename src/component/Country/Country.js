import React from 'react';

const Country = (props) => {
    return (
        <div>
            <img src={props.flags.png} alt="" />
            <h2>Name: {props.name}</h2>
            <p>Capital: {props.capital}</p>
        </div>
    );
};

export default Country;