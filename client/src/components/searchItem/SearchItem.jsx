import { Link } from 'react-router-dom';
import './searchItem.css';

function SearchItem({ item }) {
  const { rating, cheapsetPrice, description, distance, name, _id } = item;
  return (
    <div className="searchItem">
      <img
        src="https://cf2.bstatic.com/xdata/images/hotel/square240/195085179.webp?k=3c604b3b318a1f4fd0b873ede395d1991b0d56029672b6a4afcd88e46bf1d17a&o="
        alt="hotel img"
        className="searchItemImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{name}</h1>
        <span className="siDistance">{distance} from center</span>
        <span className="siTaxiOp">Free airport</span>
        <span className="siSubtitle">
          Studio Apartment with air conditioning
        </span>
        <span className="siFeatures">{description}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {rating && (
          <div className="detailHeader">
            <h2 className="deatilTitle">Excellent</h2>
            <span className="itemRating">{rating}</span>
          </div>
        )}
        <div className="detailContent">
          <span className="detailPrice">{cheapsetPrice}$</span>
          <p className="detailSubtitle">Inculdes taxes and fees</p>
          <Link to={`/hotels/${_id}`}>
            <button className="detailBtn">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
