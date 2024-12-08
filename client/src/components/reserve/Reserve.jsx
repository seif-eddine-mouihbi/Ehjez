import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './reserve.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`);
  // console.log(loading);
  const { date } = useContext(SearchContext);
  // console.log(date);

  const getDateInRanges = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(date.getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDateInRanges(date[0].startDate, date[0].endDate);
  console.log(typeof allDates);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  // console.log(selectedRooms);

  //Start Here
  const handleClick = () => {};

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => {
            setOpen(false);
          }}
        />
        <span>Select your rooms:</span>
        {data.map((item, i) => (
          <div className="rItem" key={i}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rPrice">{item.price}</div>
              <div className="rMax">
                Max People: <strong>{item.maxPeople}</strong>
              </div>
            </div>
            {item.roomNumbers.map((roomNumber, i) => (
              <div className="room" key={i}>
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Rserve Now!
        </button>
      </div>
    </div>
  );
};
export default Reserve;
