import React from "react";

const Home = () => {
  const handledropdown = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <select onChange= {handledropdown}>
        <option value= 'tech'> tech </option>
        <option value='beauty'> beauty </option>
      </select>
    </div>
  );
};

export default Home;
