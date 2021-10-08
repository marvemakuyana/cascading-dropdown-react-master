import React from "react";
const CountryList = ({ filteredCountries, filteredRegion }) => {
    return (
      <div className='card-list'>
        {filteredCountries.map((country) => (
          <p key={country.name}  >{country.name} </p>
        ))}
      </div>
    );
  };

  export default CountryList