import "./List.css";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import MailList from "../../Components/maillist/MailList";
import Footer from "../../Components/footer/Footer";
// import Featured from '../../Components/featured/Featured'
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import format from "date-fns/format";
// import { DateRange } from "react-date-range";
import Searchitem from "../../Components/searchitem/Searchitem";

const List = () => {
  // const location = useLocation();
  // console.log(location);

  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />

        <div className="list">
          <div className="listContainer">
            <div className="listWrapper">
              <div className="listSearch">
                <h1 className="lsTitle">Search</h1>
                <div className="lsItem">
                  <label htmlFor="">Destination</label>
                  <input type="text" />
                </div>
                <div className="lsItem">
                  <label htmlFor="">Check-in Date</label>
                  {/* <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span> */}
                  {/* <DateRange
                  onChange={(item = setDate([item.selection]))}
                  minDate={new Date()}
                  ranges={date}
                /> */}
                  <span>04/01/2025 to 10/01/2025</span>
                </div>
                <div className="lsItem">
                  <label htmlFor="">Options</label>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>(per night)</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>(per night)</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Adult <small>(per night)</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Children <small>(per night)</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Room <small>(per night)</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                </div>
                <div className="lsItem">
                  <button className="lsBtn">Search</button>
                </div>
              </div>
              <div className="listResult">
                <Searchitem />
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
    </>
  );
};

export default List;
