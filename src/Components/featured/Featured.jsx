import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <>
      <div className="featured">
        {/* first */}
        <div className="featuredItem">
          <img
            src="https://cdn.britannica.com/65/3465-050-AA5092D6/Petronas-Twin-Towers-Malaysia-Kuala-Lumpur-Associates.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>227 property</h2>
          </div>
        </div>
        {/* second */}
        <div className="featuredItem">
          <img
            src="https://i.pinimg.com/736x/27/aa/fe/27aafef03254c36e0f2d3d51a5b2035b.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Jonathan</h1>
            <h2>888 property</h2>
          </div>
        </div>
        {/* third */}
        <div className="featuredItem">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/34/70/42/1000_F_134704269_DlXW1lhJSLN9UpfIjYT5nmue5Abv6n3A.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Goblin</h1>
            <h2>756 property</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
