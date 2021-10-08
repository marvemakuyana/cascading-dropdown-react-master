import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { isMobile, mobileVendor, browserName, deviceType, getUA,osVersion, osName,mobileModel, fullBrowserVersion } from 'react-device-detect';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const AppSearch = props => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [emploment_dates, setEmploymentDates] = useState({
    still_work_here: null,
    end_date: "",
  });
  const countries = [
    {"id": 1, "name": "Afghanistan"},
    {"id": 2, "name": "Albania"},
    {"id": 3, "name": "Algeria"},
    {"id": 4, "name": "American Samoa"}
];
const transformed = countries.map(({ id, name }) => ({ value: id, label: name }));
console.log(transformed);
  const [isVisible, setisVisible] = useState(true);

  useEffect(() => {

    const data = localStorage.getItem('steps')

    if (data) {
        setEmploymentDates(JSON.parse(data))
    }

}, [])


useEffect(() => {

    localStorage.setItem('steps', JSON.stringify(emploment_dates))

})

useEffect(() => {

  if(emploment_dates.still_work_here === 'yes'){
    setisVisible(false)
  }

})

  const toggle = (event) => {
    setisVisible(false)
    const { name, value } = event.target
    setEmploymentDates({ ...emploment_dates, [name]: value })

  }
  const handleInputChange = event => {
    const { name, value } = event.target
    setEmploymentDates({ ...emploment_dates, [name]: value })
};
  const onSubmit = () => {
    console.log(options)
    props.history.push('/two');
  }


  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options.map((data, i) => {
          return data
        })}
      />
      <br />
      {/* Device is : {isMobile ? "Mobile" : "Desktop"}<br/><br/>  */}
      Os version : {osVersion}<br/> <br/> 
     Os name : {osName}<br/> <br/> 
     User Agent: {getUA}<br/><br/> 
     Mobile Model : {mobileModel}<br/><br/> 
      Device type is : {deviceType}<br/><br/> 
      Mobile type is : {mobileVendor}<br/><br/>  
      Browser Name is :  {browserName}<br/><br/> 
      Full Browser version is :  {fullBrowserVersion}<br/><br/> 
      
      <div style={{ display: (isVisible ? 'block' : 'none') }}>
        <p className="my-5 text-sm text-gray-900" >What date did your employment end with your company? </p>
        <input type="date"
          name="end_date"
          value={emploment_dates.end_date}
          onChange={handleInputChange}
          id="end_date"
          autoComplete="end_date"
          format="dd-MM-yyyy"
          placeholder="DD-MM-YYYY"
          className="block w-full px-3 py-2 mx-0 mt-1 mb-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />

      </div>
      <div>
        <input
          type='radio'
          name='still_work_here'
          value='yes'
          checked={emploment_dates.still_work_here === 'yes'}
          onChange={toggle}
        />   I still work here
      </div><br />
      <button type="button" onClick={onSubmit}>SUBMIT</button>
    </div>
  );
}
export default AppSearch