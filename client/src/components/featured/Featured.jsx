import './featured.css';
import useFetch from '../../hooks/useFetch';

const Featured = () => {
  const { data, loading, error } = useFetch(
    'api/hotels/countByCity?cities=berlin,madrid'
  );
  
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf2.bstatic.com/xdata/images/city/600x600/654398.jpg?k=427e7f65701353ae5b7873188a5ed541f44ba7ac10f8e13a4e456d8191cc517b&o="
          alt="featured image"
        />
        <div className="featuredTitles">
          <h1>Hammamet</h1>
          <h2>123 propreties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf2.bstatic.com/xdata/images/city/600x600/977227.jpg?k=7cf547df1d40f65019ad3bb9cc72a9bfd9763dc86b933cd51b50dfcb41dac8f2&o="
          alt="featured image"
        />
        <div className="featuredTitles">
          <h1>Istanbul</h1>
          <h2>500 propreties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf2.bstatic.com/xdata/images/city/600x600/977242.jpg?k=72bfe23a6d7a496e0305b94bbb28ce197f3df2d6dd28986c3760a5f1c931664c&o="
          alt="featured image"
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>250 propreties</h2>
        </div>
      </div>
      {/* <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf2.bstatic.com/xdata/images/city/600x600/654468.jpg?k=cc25f9bd4d471b24e38add37125b96197c4da3e2760459566cf867e67eb3c285&o="
          alt="featured image"
        />
        <div className="featuredTitles">
          <h1>Tunis</h1>
          <h2>50 propreties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://cf2.bstatic.com/xdata/images/city/600x600/654427.jpg?k=4bee1627419a4bb4c4565179860110cb99b9cf591536eee847f54e0f0438be39&o="
          alt="featured image"
        />
        <div className="featuredTitles">
          <h1>Sousse</h1>
          <h2>130 propreties</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Featured;
