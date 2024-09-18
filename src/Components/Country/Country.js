import React from "react";

const Country = (props) => {
  //console.log(props.country);
  //console.log(props.handleAddCountry);

  const { common, official } = props.country.name;

  const countryDiv = {
    border: "1px solid red",
    margin: "10px",
    width: "400px",
    padding: "10px",
  };

  const flagStyle = { height: "50px" };
  const handleAddCountry = props.handleAddCountry;
  // console.log(handleAddCountry);
  return (
    <div style={countryDiv}>
      <h2>This is {common}</h2>
      <img style={flagStyle} src={props.country.flags.png} alt="" />
      <h3>Region-{props.country.region}</h3>
      <h3>Capital -{props.country.capital}</h3>
      <button onClick={() => handleAddCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
