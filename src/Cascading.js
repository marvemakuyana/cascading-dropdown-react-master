import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from './data.json';

function Cascading() {
  const [country, setCountry] = useState(null);
  const [lang, setLang] = useState(null);
  const [langList, setLangList] = useState([]);
  
  
  const handleCountryChange = (obj) => {
    setCountry(obj);
    setLangList(obj.languages);
    //setLang(null);
  };

  
  const handleLanguageChange = (obj) => {
    setLang(obj);
  };


  return (
    <div className="App">
      <h3>Cascading dropdown in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <div style={{ width: 400, marginBottom: 20 }}>
        <b>Country</b>
       
        <Select
          placeholder="Select Country"
          isSearchable= {true}
          isClearable={true}
          value={country}
          options={data}
          onChange={handleCountryChange}
          getOptionLabel={x => x.region}
          getOptionValue={x => x.country_code}
        />
        <br />
        <b>Language</b>
        <Select
          placeholder="Select Language"
          value={lang}
          options={langList}
          onChange={handleLanguageChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
        />
      </div>
      {/* <span><b>Link:</b> {country && lang ? link : '-'}</span> */}
    </div>
  );
}

export default Cascading;
