import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList';

  const Homepage = () => {
    const [countries, setCountries] = useState([]);
    const [searchedCountry, setSearchedCountry] = useState('');
    const [region, setRegion] = useState('');
  
    useEffect(() => {
      console.log('effect');
      axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => {
        console.log(response);
        setCountries(response.data);
      });
    }, []);
  
    const handleSearch = (event) => {
      setSearchedCountry(event.target.value);
    };
    const handleSelect = (event) => {
      setRegion(event.target.value);
    };
  
    // Filter function
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchedCountry.toLowerCase())
    );
    const filteredRegion = countries.filter((country) =>
      country.region.toLowerCase().includes(region.toLocaleLowerCase())
    );
    
  
    return (
      <div className='homepage'>
        <input type='text' onChange={handleSearch} />
        <select value={region} onChange={handleSelect}>
          <option value='All'>All</option>
          <option value='Europe'>Europe</option>
          <option value='Asia'>Asia</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Oceania'>Oceania</option>
        </select>
        <CountryList
          filteredCountries={filteredCountries}
          filteredRegion={filteredRegion}
        />
      </div>
    );
  };
  export default Homepage