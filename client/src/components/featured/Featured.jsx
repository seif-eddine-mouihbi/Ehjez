import './featured.css';
import useFetch from '../../hooks/useFetch';

const Featured = () => {
  const { data, loading, error } = useFetch(
    'api/hotels/countByCity?cities=berlin,madrid,paris'
  );
  // console.log(data);
  

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://cf2.bstatic.com/xdata/images/city/600x600/654398.jpg?k=427e7f65701353ae5b7873188a5ed541f44ba7ac10f8e13a4e456d8191cc517b&o="
              alt="featured image"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://cf2.bstatic.com/xdata/images/city/600x600/977227.jpg?k=7cf547df1d40f65019ad3bb9cc72a9bfd9763dc86b933cd51b50dfcb41dac8f2&o="
              alt="featured image"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} Properties</h2>
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
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
