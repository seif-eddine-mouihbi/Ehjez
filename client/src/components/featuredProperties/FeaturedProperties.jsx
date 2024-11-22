import './featuredProperties.css';
import useFetch from '../../hooks/useFetch';

function FeaturedProperties() {
  const { data, loading, error } = useFetch(
    '/api/hotels?featured=true&limit=4'
  );

  return (
    <div className="fp">
      {loading ? (
        'Loading'
      ) : (
        <>
          {data.map((item, i) => (
            <div className="fpItem" key={i}>
              <img className="fpImg" src={item.photos[i]} alt="featured img" />
              <span className="fpName">{item.name}</span>
              <span className="fpName">{item.city}</span>
              <span className="fpName">
                starting from ${item.cheapsetPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excelent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties;
