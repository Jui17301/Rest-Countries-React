import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries,setVisitedCountries] = useState([])
  const[visitedFlags,setVisitedFlags] = useState([])

  useEffect(() => {
fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])
const handleVisitedCountry = country=>{
  const newVisitedCountries =[...visitedCountries,country];
  setVisitedCountries(newVisitedCountries)
}
const handleVisitedFlags = flag=>{
   const newVisitedFlags = [...visitedFlags,flag];
   setVisitedFlags(newVisitedFlags);
  
}
//remove item from an array in a state
//use filter to select all the elements expect the one you want to remove 
  return (
    <div>
      <h3 style={{color:'red',textAlign:'center'}}>Country Length is {countries.length}</h3>
      <div>
        <h5 style={{color:'red',textAlign:'center'}}>Visited Countries:{visitedCountries.length}</h5>
        <ul>{
        visitedCountries.map(country=>
    <li key={country.cca3}>{country.name.common}</li>)
    }
      </ul>
      </div>
      <div className="flag-container">
       {
       visitedFlags.map((flag,index)=>
       <img key={index} src={flag} alt="" />)
       }
      </div>
      <div className="countries">
      {countries.map((country) => 
        <Country
        handleVisitedCountry={handleVisitedCountry} 
        handleVisitedFlags={handleVisitedFlags}
        key={country.cca3}  
        country={country}
        ></Country>
      )}
    </div>
    </div>
  );
};

export default Countries;
