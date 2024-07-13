import { useState } from 'react';
import './Country.css';
// import CountryDetail from './CountryDetail';

 export const Country = ({country,handleVisitedCountry,handleVisitedFlags}) =>
   {
    const{name,flags,population,area,cca3}=country;
    const[visited,setVisited]=useState(false)
    const handleVisited=()=>{
                 setVisited(!visited);
                }
  return (  
      <div className={`country ${visited && "visited"}`}>
      
      <img src={flags.png} alt="" />
      <h3 style={{color:visited ?'Purple':'Black'}}>Name:{name?.common}</h3>
      <div className='card'><p>Population : {population}</p>
      <p>Area :{area}</p>
      <p><small>Code:{cca3}</small></p></div>
      <div className='btn-group'>
      <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
      <button onClick={()=> handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <button onClick={handleVisited}>{visited ? "Visited":"Going"}</button>
      </div>
      {
        visited && 'I have visited this country'
      }
      {
        visited || 'I want to visit this country' 
      }
      <hr />

      {/* <CountryDetail
      country={country}
      handleVisitedCountry = {handleVisitedCountry}
      handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail> */}
    
      </div>
    
  )
}

export default Country
