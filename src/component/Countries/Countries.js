import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [Countries, setCountry] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data=> setCountry(data))
    },[])
    return (
        <div className='countries'>
            {
                Countries.map(country => 
                    <Country flag={country.flag}
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    key={country.cca3}
                ></Country>)
            }
            <h2>Lets tour the world</h2>
        </div>
    );
};

export default Countries;