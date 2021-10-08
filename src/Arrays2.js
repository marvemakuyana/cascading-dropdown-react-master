import React, { useState} from "react";

const Test = () => {
    let datas =[
    {   
        "id":1,
        "title":"Ucat",
        "handle":"mi"
    },
    {
        "id":2,
        "title":"Acat",
        "handle":"csk"
    },
    {
        "id":3,
        "title":"Vcat",
        "handle":"kkr"
    },
    {
        "id":4,
        "title":"Atar",
        "handle":"pkbs"
    }];
  const [search, setSearch] =useState(datas);
  const handleInputChange = (e) => {
  var dm = e.target.value;
  var str =dm.toString();
  var debug = datas.filter(x=> x["title"].toLowerCase().includes(str));
  setSearch(debug);
};
  
  return(
      <>
  <input type="text"  onChange={handleInputChange}/>
  {search.map((item)=>(
      <div key={item.id}>
          <ul>
              <li>
              {item.handle} 
              <br/>
              {item.title}
              </li>
          </ul>
      </div>
  ))}
    </>
  )  
}
export default  Test
  