import React, { useEffect, useState } from "react";
import { colourOptions } from "./data";
import Select from "react-select";

function LocationDropdown() {
  const [myData, setMyData] = useState({
    countries: [],
    states: [],
    lgas: [],
    selectedCountry: "--Choose Country--",
    selectedState: "--Choose State--"
  });

  useEffect(() => {
    setMyData(prevState => ({
      ...prevState,
      countries: [
        {
          name: "Nigeria",
          value: "nigeria",
          states: [
            {
              name: "Abia",
              value: "abia",
              lgas: [
                { name: "Aba", value: "aba" },
                { name: "Oru", value: "oru" }
              ]
            },
            {
              name: "Adamawa",
              value: "adamawa",
              lgas: [
                { name: "Demsa", value: "demsa" },
                { name: "Fufure", value: "fufure" }
              ]
            }
          ]
        },
        {
          name: "SA",
          value: "sa",
          states: [
            {
              name: "kzn",
              value: "kz",
              lgas: [
                { name: "Durban", value: "dur" },
                { name: "Hilton", value: "hil" }
              ]
            },
            {
              name: "Gauteng",
              value: "gau",
              lgas: [
                { name: "Joburg", value: "joburg" },
                { name: "Pretoria", value: "pret" }
              ]
            }
          ]
        }
      ]
    }));
  }, []);

  const mergeAndUpdateMyData = newData => {
    setMyData({ ...myData, ...newData });
  };

  const changeCountry = event => {
    mergeAndUpdateMyData({
      selectedCountry: event.target.value,
      states: myData.countries.find(cntry => cntry.name === event.target.value)
        .states
    });
   
  };

  const changeState = event => {
    const stats = myData.countries.find(
      cntry => cntry.name === myData.selectedCountry
    ).states;
    mergeAndUpdateMyData({
      selectedState: event.target.value,
      lgas: stats.find(stats => stats.name === event.target.value).lgas
    });
  };

  return (
    <div id="container">
      <h2>Cascading or Dependent Dropdown using React</h2>
      <div>
        <label>Country</label>
        {/* <Select 
        placeholder='Country'
        value={myData.selectedCountry}
        onChange={changeCountry}
        options={colourOptions}/> */}
         <select
          placeholder="Country"
          value={myData.selectedCountry}
          onChange={changeCountry}
        >
          <option>--Choose Country--</option>
          {myData.countries.map((country, key) => {
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
          value={myData.selectedState}
          onChange={changeState}
        >
          <option>--Choose State--</option>
          {myData.states.map((state, key) => {
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
        <select placeholder="LGA" value={myData.selectedLga}>
          <option>--Choose LGA--</option>
          {myData.lgas.map((lga, key) => {
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
