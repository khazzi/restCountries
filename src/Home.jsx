import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BigCard from './BigCard';
import App from './App';
import { CardDataProvider } from './CardDataProvider';

const Home = () => {
    const api = "https://restcountries.com/v3.1/all";
    const [data, setData] = useState([]);

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
    <div>
      <Routes>
        <Route exact path="/" element={<App data={data} setCardData={setData}  />} />
        <Route path="/bigcard" element={<BigCard />} />
      </Routes>
    </div>
    </CardDataProvider>
);
  
}

export default Home