import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import MailList from "../../Components/maillist/MailList";
import Footer from "../../Components/footer/Footer";
import { useState } from "react";
import "./Hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Hotel = (type) => {
  const [slideNumber, setslideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fHww",
    },
    {
      src: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/949406/pexels-photo-949406.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/261108/pexels-photo-261108.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const handleOpen = (i) => {
    setslideNumber(i);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {open && 
          <div className="slider">
            <FontAwesomeIcon className="close" icon="fa-sharp fa-solid fa-circle-xmark" />
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                        <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />          
            </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Register or Book Now</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 new york </span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Tower Street Apartments</h1>
              <p className="hotelDesc">
                Tower Street Apartments enjoys a location in Krakow, a 12-minute
                walk from Krakow Central Station and half a mile from Galeria
                Krakowska. The property is close to St. Florian's Gate, Wawel
                Royal Castle, and Lost Souls Alley. The property is 500 yards
                from the city center and a 16-minute walk from National Museum
                of Krakow. All units feature air conditioning and a flat-screen
                TV. Every room is fitted with a coffee machine, a private
                bathroom, and free Wifi, while certain rooms have a balcony and
                some have city views. At the apartment complex, every unit is
                fitted with bed linen and towels. Popular points of interest
                near the apartment include Town Hall Tower, Main Market Square,
                and Cloth Hall. The nearest airport is John Paul II
                International Kraków–Balice, 10 miles from Tower Street
                Apartments, and the property offers a paid airport shuttle
                service.
              </p>
            </div>
            <div className="hotelDetalsPrice">
              <h1>perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this propery has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
<div className="component1">
  
<MailList />
</div>
<div className="component2">

      <Footer />
</div>
    </div>
  );
};

export default Hotel;
