import './featuredProperties.css';
import useFetch from '../../hooks/useFetch';

function FeaturedProperties() {
  const { data, loading, error } = useFetch();

  return (
    <div className="fp">
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf2.bstatic.com/xdata/images/xphoto/300x240/140034639.jpg?k=e4a2340b9e90b644c51151c8f87c9130095091d63809f3da770fc63ca263b8ca&o="
          alt="featured img"
        />
        <span className="fpName">Carthage</span>
        <span className="fpName">tunis</span>
        <span className="fpName">starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf2.bstatic.com/xdata/images/xphoto/300x240/140034639.jpg?k=e4a2340b9e90b644c51151c8f87c9130095091d63809f3da770fc63ca263b8ca&o="
          alt="featured img"
        />
        <span className="fpName">Carthage</span>
        <span className="fpName">tunis</span>
        <span className="fpName">starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf2.bstatic.com/xdata/images/xphoto/300x240/140034639.jpg?k=e4a2340b9e90b644c51151c8f87c9130095091d63809f3da770fc63ca263b8ca&o="
          alt="featured img"
        />
        <span className="fpName">Carthage</span>
        <span className="fpName">tunis</span>
        <span className="fpName">starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf2.bstatic.com/xdata/images/xphoto/300x240/140034639.jpg?k=e4a2340b9e90b644c51151c8f87c9130095091d63809f3da770fc63ca263b8ca&o="
          alt="featured img"
        />
        <span className="fpName">Carthage</span>
        <span className="fpName">tunis</span>
        <span className="fpName">starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://cf2.bstatic.com/xdata/images/xphoto/300x240/140034639.jpg?k=e4a2340b9e90b644c51151c8f87c9130095091d63809f3da770fc63ca263b8ca&o="
          alt="featured img"
        />
        <span className="fpName">Carthage</span>
        <span className="fpName">tunis</span>
        <span className="fpName">starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excelent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
