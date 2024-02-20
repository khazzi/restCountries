import  { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CardDataContext = createContext();

export const useCardDataContext = () => useContext(CardDataContext);

export const CardDataProvider = ({ children }) => {
  const api = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState(null);
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


    // handle div click
    const handleDivClick = () => {
      const filtered = data.filter(item =>
        item.name.common.toLowerCase() == data.name.common.toLowerCase())
      setCardData(filtered)
    }
  return (
    <CardDataContext.Provider value={{ cardData, setCardData, handleDivClick, data, setData }}>
      {children}
    </CardDataContext.Provider>
  );
};
CardDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
