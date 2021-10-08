import React, { useEffect, useState } from "react";

import Select from 'react-select';
import { colourOptions } from './data';




const SingleSelect  =() =>{
    const initialFormState = {
        prof_bodies: "",

    }
 
  const [employment_details, setEmploymentDetails] = useState(initialFormState);
  const [myData, setMyData] = useState({
    data: []
  })
  useEffect(() => {
    setMyData({data: colourOptions})

    }, []);
 
  const handleChange = event => {
    const { name, value } = event.target
    setEmploymentDetails({ ...employment_details, [name]: value })
  }
  const handleSubmit =()=> {
      console.log(myData)
  }

//   toggleClearable = () =>
//     this.setState(state => ({ isClearable: !state.isClearable }));
//   toggleDisabled = () =>
//     this.setState(state => ({ isDisabled: !state.isDisabled }));
//   toggleLoading = () =>
//     this.setState(state => ({ isLoading: !state.isLoading }));
//   toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
//   toggleSearchable = () =>
//     this.setState(state => ({ isSearchable: !state.isSearchable }));
  
    return (
      <div>
        <Select
          //className="basic-single"
         // classNamePrefix="select"
          //defaultValue={colourOptions[0]}
        //   isDisabled={isDisabled}
        //   isLoading={isLoading}
           isClearable={true}
           //value={employment_details.prof_bodies}
           name='prof_bodies'
           //onChange={handleChange}
        //   isRtl={isRtl}
        //   isSearchable={isSearchable}
         // name="color"
          options={colourOptions}
        />
        
      </div>
    );

}

export default SingleSelect