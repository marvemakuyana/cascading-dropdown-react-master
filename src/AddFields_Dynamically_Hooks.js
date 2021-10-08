import React, { useState } from 'react';
import './style.css';

const DynamicFields = () => {
     const [formValues, setFormValues] = useState([{ name: '', email: '', address1: '',city: '',postcode: ''}]);
     const [isVisible, setIsVisible]= useState(false)

     let handleChange = (i, e) => {
         let newFormValues = [...formValues];
         newFormValues[i][e.target.name] = e .target.value;
         setFormValues(newFormValues);
         setIsVisible(true)
     }

     let addFormFields = () => {
         setFormValues([...formValues, { name: '', email: '', address1: '', city: '', postcode: ''}])
     }

     let removeFormFields = (i) => {
         let newFormValues = [...formValues];
         newFormValues.splice(i, 1);
         setFormValues(newFormValues)
     }

     let handleSubmit = (event) =>{
         event.preventDefault();
         alert(JSON.stringify(formValues))
     }

     return(
         <form onSubmit={handleSubmit}>
             {formValues.map((element, index) =>(
                 <div className='form-inline' key={index}>
                     <label>Name</label>
                     <input type='text' name='name' value={element.name || ''} onChange={e => handleChange(index, e)} />
                     <label>Email</label>
                     <input type='text' name='email' value={element.email || ''} onChange={e => handleChange(index, e)} />
                     <div style={{ display: (isVisible ? 'block' : 'none') }}>
                     <label>Address1</label>
                     <input type='text' name='address1' value={element.address1 || ''} onChange={e => handleChange(index, e)} />
                     <label>City</label>
                     <input type='text' name='city' value={element.city || ''} onChange={e => handleChange(index, e)} />
                     <label>Postcode</label>
                     <input type='text' name='postcode' value={element.postcode || ''} onChange={e => handleChange(index, e)} />
                     </div>
                     {
                         index ?
                         <button type='button' className='button remove' onClick={() => removeFormFields(index)}>Remove</button>
                        : null
                     }
                 </div>
             ))}
             <div className='button-section'>
                 <button className='button add' type='button' onClick={() => addFormFields()}>Add</button>
                 <button className='button submit' type='submit'>Submit</button>
             </div>
         </form>
     );
}

export default DynamicFields 