import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;
    if (direction === 'l') {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSliderNumber)
  };
  const photos = [
    {
      src: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/375181225.jpg?k=b05bacbffa9768e6bb5c2d5df6f314bc18fd85caa39f297d81040855abd0f763&o=&hp=1',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/95647217.jpg?k=06927e86ba965fd0e509077ddd4061996e8082b85c629c3e0278e400cd08fc67&o=&hp=1',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/95357305.jpg?k=11bf7c8cb0ea4256a4910432bf3ec9d09f4218eaec4b9cb0c75575902d5b308b&o=&hp=1',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/127449813.jpg?k=eb18d561519705250d9c0c5ecdd76b43fbd2ba05944d94ca9a38912ad6cf009d&o=&hp=1',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/63364205.jpg?k=765a26b74254264fe5309c39cbeece8c67fab12be97b592818d59f50e49921a7&o=&hp=1',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/375181225.jpg?k=b05bacbffa9768e6bb5c2d5df6f314bc18fd85caa39f297d81040855abd0f763&o=&hp=1',
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => {
                handleMove('l');
              }}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt="slide img"
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImgs">
            {photos.map((photo, i) => (
              <div className="hotelImageWrapper">
                <img
                  src={photo.src}
                  alt="hotel image"
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDeatils">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus laudantium repellendus blanditiis consectetur fugiat
                magnam numquam dolore. Eos ab vel id maiores cumque
                necessitatibus repudiandae dolores ad placeat distinctio. Earum?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1 className="priceTitle">Perfect for a 9-night stay!</h1>
              <p className="contentPrice">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eveniet dolorum dolores est. Aperiam consectetur nam
                expedita earum tempore recusandae facere sapiente eaque minima
                esse. Reiciendis saepe explicabo tempora! Ex.
              </p>
              <h2 className="price">
                <b>$945</b> (9 nights)
              </h2>
              <button className="hotelPriceBtn">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
