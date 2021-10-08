import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom'

// const options = [
//   { value: '1', label: 'Academic Primary Care Society for' },
//   { value: '2', label: 'Accountancy Association of Lecturers in' },
//   { value: '3', label: 'Biology Curators Group' },
//   { value: '4', label: 'Biomechanics in Sports, International Society of (ISBS), with effect from 6 April 2020' },
//   { value: '5', label: 'Biometric Society (British Region)' },
//   { value: '6', label: 'Careers Guidance Institute of' },
//   { value: '7', label: 'Charity Finance Directors Group' },
//   { value: '8', label: 'Directors Institute of' },
//   { value: '9', label: 'Educational Management and Administration Society British' },
//   { value: '10', label: 'Engineers Australia' },
//   { value: '11', label: 'Geosynthetics Society International UK Chapter' },
//   { value: '12', label: 'Health Education Central Council for '},
//   { value: '13', label: 'Interim Management Institute of' },
//   { value: '14', label: 'Junior Chamber of Commerce Stockport' },
//   { value: '15', label: 'Legacy Management Institute of' },
//   { value: '16', label: 'Mammal Society of the British Isles' },
//   { value: '17', label: 'Medical Association Lourdes' },
//   { value: '18', label: 'Operational Research Society' },
//   { value: '19', label: 'Petroleum Exploration Society of Great Britain' },
//   { value: '20', label: 'Rheology British Society of' },
  
// ];

const Searchable =() => {
    const initialFormState = {
        prof_body_name: "",
        miles_2018: "",
    miles_2019: "",
    miles_2020: "",
    }
    let history = useHistory();
    const [mileage, setMileage] = useState(initialFormState);
   
        const [selectedOption, setSelectedOption] = useState({
            bodies: []
        });
        useEffect(() => {
            setSelectedOption(prevState =>({
                ...prevState,
                bodies : [
                    { value: '1', label: 'Academic Primary Care Society for' },
                    { value: '2', label: 'Accountancy Association of Lecturers in' },
                    { value: '3', label: 'Biology Curators Group' },
                    { value: '4', label: 'Biomechanics in Sports, International Society of (ISBS), with effect from 6 April 2020' },
                    { value: '5', label: 'Biometric Society (British Region)' },
                    { value: '6', label: 'Careers Guidance Institute of' },
                    { value: '7', label: 'Charity Finance Directors Group' },
                    { value: '8', label: 'Directors Institute of' },
                    { value: '9', label: 'Educational Management and Administration Society British' },
                    { value: '10', label: 'Engineers Australia' },
                    { value: '11', label: 'Geosynthetics Society International UK Chapter' },
                    { value: '12', label: 'Health Education Central Council for '},
                    { value: '13', label: 'Interim Management Institute of' },
                    { value: '14', label: 'Junior Chamber of Commerce Stockport' },
                    { value: '15', label: 'Legacy Management Institute of' },
                    { value: '16', label: 'Mammal Society of the British Isles' },
                    { value: '17', label: 'Medical Association Lourdes' },
                    { value: '18', label: 'Operational Research Society' },
                    { value: '19', label: 'Petroleum Exploration Society of Great Britain' },
                    { value: '20', label: 'Rheology British Society of' },
                    
                  ]
            }))
        }, []);
        const onChange = (event) => {
            const { name, value } = event.target
            setMileage({ ...mileage, [name]: value})
        }
        const onChange2 = (prof_body_name) => {
            // prof_body_name =  selectedOption.bodies.map((details, i) =>{
            //     return (
            //         details.label
            //     )   
                
            //   })
            setMileage({ ...mileage, prof_body_name: prof_body_name})
        }
       
       
          const onSubmit = () => {
           
            console.log(mileage)
           
        }
      
        return (
            
            
          <div className="App">
              
            <Select
              //defaultValue={mileage.prof_body_name}
              placeholder='Search...'
              name='prof_body_name'
              value={mileage.prof_body_name}
              onChange={onChange2}
            //   options={selectedOption.bodies.map((label, i) =>{
            //     return label
            //   })}
              options={selectedOption.bodies}
              //options={data}
              isClearable={true}
            /><br />
            <input type='text' name='miles_2018' value={mileage.miles_2018} onChange={onChange} />
            <input type='text' name='miles_2019' value={mileage.miles_2019} onChange={onChange} />
            <input type='text' name='miles_2020' value={mileage.miles_2020} onChange={onChange} /><br/><br/>
            <button type='button' onClick={() => history.goBack()}>Previous</button>
            <button type="button" onClick={onSubmit}>SUBMIT</button>
          </div>

        );
      }

export default Searchable