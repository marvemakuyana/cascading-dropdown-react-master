import React, { useState } from "react";
import countries from "./countries";

function LocationDropdown() {


  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedLga, setSelectedLga] = useState();

  

  const changeCountry = event => {
    setSelectedCountry(countries.find(c => c.name === event.target.value));

    // reset state and lga when country changes
    setSelectedState(null);
    setSelectedLga(null);
    
  };

  const changeState = event => {
    setSelectedState(
      selectedCountry.states.find(s => s.name === event.target.value)
    );

  };

  const changeLga = event => {
    setSelectedLga(selectedState.lgas.find(l => l.name === event.target.value));
  };

  const states = selectedCountry ? selectedCountry.states : [];

  const lgas = selectedState ? selectedState.lgas : [];

  return (
    <div id="container">
      <h2>Cascading or Dependent Dropdown using React hooks</h2>
      <div>
        <label>Country</label>
        <select
          placeholder="Country"
          value={selectedCountry ? selectedCountry.name : ""}
          onChange={changeCountry}
        >
          <option>--Choose Country--</option>
          {countries.map((country, key) => {
            return (
              <option value={country.name} key={key}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>State</label>
        <select
          placeholder="State"
          value={selectedState ? selectedState.name : ""}
          onChange={changeState}
        >
          <option>--Choose State--</option>
          {states.map((state, key) => {
            return (
              <option value={state.name} key={key}>
                {state.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label>LGA</label>
        <select
          placeholder="LGA"
          value={selectedLga ? selectedLga.name : ""}
          onChange={changeLga}
        >
          <option>--Choose LGA--</option>
          {lgas.map((lga, key) => {
            return (
              <option value={lga.name} key={key}>
                {lga.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default LocationDropdown;
