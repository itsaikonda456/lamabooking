import React from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyList.css";

const PropertyList = () => {
  const navigate = useNavigate();

  // Function to handle click and navigate to SearchBar with property type
  const handleClick = (propertyType) => {
    navigate(`/search?type=${propertyType}` );
  };

  return (
    <div className="pList">
      <div className="pListItem" onClick={() => handleClick("Hotels")}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDdP8G931cxbETOPmageLceW53qDZdUEi0w&s"
          alt="Hotels"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem" onClick={() => handleClick("Apartments")}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS159c5m_s5WNKBAX-7Ls8Rp1ud1piXk4S0aQ&s"
          alt="Apartments"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>182 apartments</h2>
        </div>
      </div>
      <div className="pListItem" onClick={() => handleClick("Resorts")}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXc6eOdzPasQvk4J-jp3XnWW6jEAFg8dve-w&s"
          alt="Resorts"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>8365 resorts</h2>
        </div>
      </div>
      <div className="pListItem" onClick={() => handleClick("Villas")}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76FmfosNGp1PYA2k0CqiKJpoA0TUy12snAw&s"
          alt="Villas"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>453 Villas</h2>
        </div>
      </div>
      <div className="pListItem" onClick={() => handleClick("Cabins")}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_h-zpiBBPWTj_pMc0QfkzNheyIwAczT7qKg&s"
          alt="Cabins"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>509 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
