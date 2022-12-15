import React from 'react';

const Country = (props) => {
    return (
        <div>
            <img src={props.flags} alt="" />
            <h2>Name: {props.name}</h2>
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;