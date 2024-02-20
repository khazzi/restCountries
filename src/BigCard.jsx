import { FaArrowLeftLong } from "react-icons/fa6";
import { useCardDataContext } from './CardDataProvider';
 import { Link } from "react-router-dom";
const BigCard = () => {
  const { cardData } = useCardDataContext();
  if (!cardData) {
    return null; // Handle case when cardData is not available
  }
  return (
    <div>
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
    </div>
  )
}

export default BigCard