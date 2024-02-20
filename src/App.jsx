import { useState, useEffect } from "react";
import './App.css';
import { IoMoonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { CardDataProvider } from "./CardDataProvider";
import { FaArrowLeftLong } from "react-icons/fa6";

const api = "https://restcountries.com/v3.1/all";

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isActive, setIsActive ] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [filterContinent, setFilterContinent] = useState(data);
  const [cardData, setCardData] = useState(null);
    // handle div click
    const handleDivClick = () => {
      const filtered = data.filter(item =>
        item.name.common.toLowerCase() == data.name.common.toLowerCase())
      setCardData(filtered)
    }
  // handle input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const filtered = data.filter(item =>
      item.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);

  
  };
// africa
  const handleCountry = () => {
    setInputValue('');
    const value = 'africa';
    const filteredContinent = data.filter(item =>
      item.continents[0].toLowerCase().includes(value.toLowerCase())
    );
    setFilterContinent(filteredContinent);
    setIsActive(false);
  }
  // europe
  const handleCountryEurope = () => {
    setInputValue('');
    const value = 'europe';
    const filteredContinent = data.filter(item =>
      item.continents[0].toLowerCase().includes(value.toLowerCase())
    );
    setFilterContinent(filteredContinent);
    setIsActive(false);
  }
  // america
  const handleCountryAmerica = () => {
    setInputValue('');
    const value = 'america';
    const filteredContinent = data.filter(item =>
      item.continents[0].toLowerCase().includes(value.toLowerCase())
    );
    setFilterContinent(filteredContinent);
    setIsActive(false);
  }

  // asia
  const handleCountryAsia = () => {
    setInputValue('');
    const value = 'asia';
    const filteredContinent = data.filter(item =>
      item.continents[0].toLowerCase().includes(value.toLowerCase())
    );
    setFilterContinent(filteredContinent);
    setIsActive(false);
  }
  //oceania
  const handleCountryOceania = () => {
    setInputValue('');
    const value = 'oceania';
    const filteredContinent = data.filter(item =>
      item.continents[0].toLowerCase().includes(value.toLowerCase())
    );
    setFilterContinent(filteredContinent);
    setIsActive(false);
  }
  // toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
 // toggle active
 const toggleActive = () => {
  setIsActive(!isActive);
};
// handle card click


  useEffect(() => {
    fetch(api)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <CardDataProvider>
    <div className={isDarkMode ? 'page' : 'page-white'}>
      <nav className={isDarkMode ? 'nav-dark' : "navbar" }>
        <h2>Where in the world?</h2>
        <div className="mode" onClick={toggleDarkMode}><button ><IoMoonOutline /></button> <p>Dark Mode</p></div>

      </nav>
      <div className="hero">
        <div className="herotop">
        <div className={isDarkMode ? 'search-dark' : "search" }>
          <button><IoSearchOutline /></button>
        <input type="text"
         placeholder="Search for a country..."
         value={inputValue}
         onChange={handleInputChange} />
        </div>
        <div className="filter">
          <div className={isDarkMode ? 'filter-dark' : "filter-header"} onClick={toggleActive}>
          <h4>Filter by Region</h4><button><IoIosArrowDown /></button> 
          </div>{
            isActive ? 
          
          <div className={isDarkMode ? 'hidden-dark active' : "hidden active"}>
          <p id="africa" onClick={handleCountry}>Africa</p>
          <p id="america" onClick={handleCountryAmerica}>America</p>
          <p id="asia" onClick={handleCountryAsia}>Asia</p>
          <p id="europe" onClick={handleCountryEurope}>Europe</p>
          <p id="oceania" onClick={handleCountryOceania}>Oceania</p>
          </div> : <div></div> 
          }

        </div>
        </div>
{/*  testing out big card at the top */}
{ cardData && (<>
<div> <Link to='/'>
            <button><FaArrowLeftLong /> Back</button>
            </Link>
        </div>
        <div>
                <div >
                 <img src={cardData.flags.png} alt={cardData.demonym} /> 
                <div>
                    <h2>{cardData.name.official}</h2>
                    <p><b>Native Name:</b>{cardData.name.official}</p>
                    <p><b>Population:</b> {cardData.population}</p>
                    <p><b>Region:</b> {cardData.region}</p>
                    <p><b>Capital:</b> {cardData.capital}</p>
                    <p><b>Sub Region:</b> {cardData.subregion}</p>
                    <p><b>Top Level Domain:</b> {cardData.tld}</p>
                    
                    
                </div>
                </div>
            
        </div> 
        </>)}
        {/*big card ends */}

        {inputValue == '' ? <div></div> :
        <div className="filter-result">
            <div className="grid-container">
            {filteredData.map(item => (
             <>
             <div key={item.name.common} className={isDarkMode ? 'card-dark' : "card"} onClick={handleDivClick}>
             {/*<Link className='links' to={{pathname:"/bigcard", state: {cardData: item}}}> */}
               <img src={item.flags.png} alt={item.demonym} />
               <div className="card-text">
                 <h4>
                   {item.name.common}
                 </h4>
                 <p>Population: {item.population}</p>
                 <p>Region: {item.region}</p>
                 <p>Capital: {item.capital}</p>
     
               </div>
              {/* </Link> */}
               </div>
             
             </>
        ))}
            </div>
        </div>
        }
        {inputValue != '' ? <div></div> :
        <div className="filter-result">
            <div className="grid-container">
            {filterContinent.map(item => (
             <>
             <div key={item.countries} className={isDarkMode ? 'card-dark' : "card"}>
              {/* <Link className='links' to={{pathname:"/bigcard", state: {cardData: item}}}> */}
               <img src={item.flags.png} alt={item.demonym} />
               <div className="card-text">
                 <h4>
                   {item.name.common}
                 </h4>
                 <p>Population: {item.population}</p>
                 <p>Region: {item.region}</p>
                 <p>Capital: {item.capital}</p>
     
               </div>
               {/*</Link> */}
               </div>
             
             </>
        ))}
            </div>
        </div>  }
        <div className="grid-container">
      {data.map((item, index) => (
        <>
        <div key={index} className={isDarkMode ? 'card-dark' : "card"} onClick={handleDivClick} >
       {/*<Link className='links' to={{pathname:"/bigcard", state: {cardData: item}}}> */} 
          <img src={item.flags.png} alt={item.demonym} />
          <div className="card-text">
            <h4>
              {item.name.common}
            </h4>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>

          </div>
         {/*</Link> */} 
          </div>
        
        </>
      ))}</div>
      </div>
    </div>
   </CardDataProvider>

  );
};

export default App;
