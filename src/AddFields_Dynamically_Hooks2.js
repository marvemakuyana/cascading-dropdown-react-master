import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  //const [wordEntered, setWordEntered] = useState('');
  const [wordEntered, setWordEntered] = useState([{ title: ""}]);

  const handleFilter = (i, e ) => {
   const searchWord = [...wordEntered]
    searchWord[i][e.target.name] = e.target.value;
    
    setWordEntered(searchWord);
    if(searchWord ==="")
   { console.log('empty ' ,searchWord)}
   else{
    console.log('full' ,searchWord)
   }
    
    const newFilter = data.filter((value) => {
       return value.title
    });
    console.log('filtered' ,filteredData)
    
    
    

        if(searchWord === ""){
            setFilteredData([])
        }
        else{
            setFilteredData(newFilter)
        }
  };

  let addFormFields = () => {
      setWordEntered([...wordEntered, { title: ''}])
  }

  let removeFormFields = (i) => {
      let newFormValues = [...wordEntered];
      newFormValues.splice(i, 1);
      setWordEntered(newFormValues);
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(wordEntered));
}
 

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    //console.log(filteredData)
  };

  const suggestionSelected = (value) => {
    
    setWordEntered(value)
    setFilteredData([])
    
  }
  return (
    <div className="search">
        { wordEntered.map((element, index) => (
                 <div className="searchInputs" key={index}>
                 <input
                   type="text"
                   name='title'
                   placeholder={placeholder}
                   value={element.title}
                   onChange={e => handleFilter(index, e)}
                 />
                 <div className="searchIcon">
                   {filteredData.length === 0 ? (
                     <SearchIcon />
                   ) : (
                     <CloseIcon id="clearBtn" onClick={clearInput} />
                   )}
                 </div>
                 {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }


               </div>
        ))}
       
       {filteredData.length != 0 && (
          <div className="dataResult">
          
            {filteredData.slice(0, 15).map((value, key) => <p key={key} onClick={() => suggestionSelected(value.title)}>{value.author}, {value.title}</p>)}
        
       
          </div>
          
       
      )}
   
     
   
        <div className='button-section'>
                 <button className='button add' type='button' onClick={() => addFormFields()}>Add</button>
                 <button className='button submit' type='submit'>Submit</button>
             </div>
    </div>
  );
}

export default SearchBar;
