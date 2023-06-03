import React, { useState } from "react";

const Search = () => {
  const [searchinput, setsearchinput] = useState("");
  const handlesearchinput = (event) => {
    setsearchinput(event.target.value);
  };
  const seetext = () => {
    console.log(searchinput);
  };
   const handlekeypress = (event) => {
    if (event.key=== 'Enter' ) {
        seetext()
    }
   }

  return (<div>
 
    <input
    type='text'
    value={searchinput}
    onChange={handlesearchinput}
    onKeyPress ={handlekeypress}
    />

    <button onClick={seetext}> Enter Search </button>

  </div>)

};


export default Search;
