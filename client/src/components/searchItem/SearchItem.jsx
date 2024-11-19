import './searchItem.css';

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://cf2.bstatic.com/xdata/images/hotel/square240/195085179.webp?k=3c604b3b318a1f4fd0b873ede395d1991b0d56029672b6a4afcd88e46bf1d17a&o="
        alt="hotel img"
        className="searchItemImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500 from center</span>
        <span className="siTaxiOp">Free airport</span>
        <span className="siSubtitle">
          Studio Apartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio - 1 bathroom - 21m² 1full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="detailHeader">
          <h2 className="deatilTitle">Excellent</h2>
          <span className="itemRating">8.9</span>
        </div>
        <div className="detailContent">
          <span className="detailPrice">$122</span>
          <p className="detailSubtitle">Includes taxes and fees</p>
          <button className="detailBtn">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
