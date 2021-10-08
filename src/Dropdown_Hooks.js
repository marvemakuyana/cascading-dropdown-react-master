import React, { useState, useEffect } from 'react';

const DropdownHooks = () => {
	
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedState, setSelectedState] = useState()
  
  
   const countries = [
    {
      name: "Nigeria",
      value: "nigeria",
      states: [
        {
          name: "Abia",
          value: "abia",
          lgas: [{ name: "Aba", value: "aba" }, { name: "Oru", value: "oru" }]
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
        name: "South Africa",
      value: "sa",
      states: [
        {
          name: "KZN",
          value: "kzn",
          lgas: [{ name: "Durban", value: "dur" }, { name: "Hilton", value: "or" }]
        },
        {
          name: "Gauteng",
          value: "adam",
          lgas: [
            { name: "Joburg", value: "dem" },
            { name: "Pretoria", value: "fuf" }
          ]
        }
      ]
    },
    {
        name: "Zimbabwe",
      value: "za",
      states: [
        {
          name: "Mashonaland",
          value: "har",
          lgas: [{ name: "Harare", value: "h" }, { name: "Ruwa", value: "ruwa" }]
        },
        {
          name: "Manicaland",
          value: "man",
          lgas: [
            { name: "Mutare", value: "mu" },
            { name: "Chipinge", value: "chi" }
          ]
        }
      ]
    }
  ];
  

  
  
	const changeCountry = (event) =>{
	
		setSelectedCountry(countries.find(cntry => cntry.name === event.target.value));
        setSelectedState(null);
	}

	const changeState = (event)=> {
		setSelectedState(
            selectedCountry.states.find(s => s.name === event.target.value)
        );
		
	}
    const states = selectedCountry ? selectedCountry.states : [];
	

		return (
			<div id="container">
				<h2>Cascading or Dependent Dropdown using React Hooks testing</h2>
	
				<div>
					<label>Country</label>
					<select placeholder="Country" value={selectedCountry ? selectedCountry.name: ''} onChange={changeCountry}>
						<option>--Choose Country--</option>
						{countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>State</label>
					<select placeholder="State" value={selectedState ? selectedState.name: ''} onChange={changeState}>
						<option>--Choose State--</option>
						{states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
			</div>
		)
	
}

export default DropdownHooks;