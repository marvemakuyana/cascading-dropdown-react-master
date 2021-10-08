import React from "react";
import "./App.css";
import SearchBar from "./AddFields_Dynamically_Hooks2";
import BookData from "./Data2.json";

function AddFields() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}

export default AddFields;