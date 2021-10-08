import React, { useState, useEffect } from 'react';

const DropdownHooks = () => {
	
    const [selectedCountry, setSelectedCountry] = useState({countries: []})
    const [selectedState, setSelectedState] = useState({states: []})
  
    useEffect(() => {
        setSelectedCountry(prevState => ({
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
            }
          ]
        }));
      }, []);
    
	const changeCountry = (event) =>{
	
		setSelectedCountry({selectedCountry: event.target.value});
    setSelectedState({selectedState: selectedCountry.countries.find(cntry => cntry.name === event.target.value)});
       
	}

	const changeState = (event)=> {
		setSelectedState(
            selectedCountry.states.find(s => s.name === event.target.value)
        );
		
	}
    //const states = selectedCountry ? selectedCountry.states : [];
	

		return (
			<div id="container">
				<h2>Cascading or Dependent Dropdown using React Hooks 2</h2>
	
				<div>
					<label>Country</label>
					<select placeholder="Country" value={selectedCountry ? selectedCountry.name: ''} onChange={changeCountry}>
						<option>--Choose Country--</option>
						{selectedCountry.countries.map((e, key) => {
							return <option key={key} value={e.name}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>State</label>
					<select placeholder="State" value={selectedState ? selectedState.name: ''} onChange={changeState}>
						<option>--Choose State--</option>
						{selectedState.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
			</div>
		)
	
}

export default DropdownHooks;