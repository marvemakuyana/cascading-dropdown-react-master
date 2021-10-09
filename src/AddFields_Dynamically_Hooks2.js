import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  //const [wordEntered, setWordEntered] = useState('');
  const [wordEntered, setWordEntered] = useState([{ books: '' }]);

  useEffect(() => {
    let date = new Date('2020-05-21');
    let date2 = new Date(`${dateOfBirthRef[0]}-${dateOfBirthRef[2]}-${dateOfBirthRef[1]}`);
   // let longMonth = date2.toLocaleString('en-us', { month: 'long' }); /* June */
    // 2020-06-21
   // new Date("04/06/2017");
   ////setDob({...dob, day1: dateOfBirthRef[2], month1: date2, year1: dateOfBirthRef[0]})
    let longMonth = date.toLocaleString('en-us', { month: 'long' }); /* June */
    let shortMonth = date.toLocaleString('en-us', { month: 'short' }); /* Jun */
    let narrowMonth = date.toLocaleString('en-us', { month: 'narrow' }); /* J */

    console.log('long',longMonth)
    console.log('short',shortMonth)
    console.log('narrow',narrowMonth)
  })

  const handleFilter = (i, e) => {
    const searchWord = [...wordEntered]
    searchWord[i][e.target.name] = e.target.value;
    //const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      wordEntered.map((data, i) => {
        if (data.books.length > 1) {
          return value.title.toLowerCase().includes(searchWord.map((data, i) => {
            data.books.toLowerCase()
          }));
        }
      })
      //   if(wordEntered.map((data,i) => {
      //       data.books.length > 1
      //   }))
      // {
      //   return value.title.toLowerCase().includes(searchWord.toLowerCase());
      // }

    });
    searchWord.map((data, i) => {
      if (data.books === "") {
        setFilteredData([])
      }
      else {
        setFilteredData(newFilter)
      }
    })

    // if (searchWord.map((data, i) =>{
    //     data.books === ""
    // })) {
    //   setFilteredData([]);
    // } 
    // else {
    //   setFilteredData(newFilter);
    // }
  };

  let addFormFields = () => {
    setWordEntered([...wordEntered, { books: '' }])
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
    //    const test = filteredData.map((data, index) => {
    //      if(value === data.title){

    //         console.log('author',data.author)}


    //     })
    let newFormValues = [...value];

    setWordEntered(value)
    setFilteredData([])

  }
  return (
    <div className="search">
      {wordEntered.map((element, index) => (
        <div className="searchInputs">
          <input
            type="text"
            name='books'
            placeholder={placeholder}
            value={element.books || ''}
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
              <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
              : null
          }


        </div>
      ))}

      <div className="dataResult">

        {filteredData.slice(0, 15).map((value, key) => <p key={key} onClick={() => suggestionSelected(value.title)}>{value.author}, {value.title}</p>)}


      </div>



      <div className='button-section'>
        <button className='button add' type='button' onClick={() => addFormFields()}>Add</button>
        <button className='button submit' type='submit'>Submit</button>
      </div>
    </div>
  );
}

export default SearchBar;
