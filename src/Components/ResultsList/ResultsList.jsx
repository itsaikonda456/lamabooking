import React from "react";
import "./ResultsList.css";

const ResultsList = ({ results }) => {
  return (
    <div className="results-container">
      {results.length > 0 ? (
        results.map((item) => (
          <div key={item.id} className="result-card">
            <img
              src={item.image || "https://via.placeholder.com/300"}
              alt={item.name}
              className="result-image"
            />
            <h2>{item.name}</h2>
            <p>{item.location}</p>
          </div>
        ))
      ) : (
        <p className="no-results">No results found</p>
      )}
    </div>
  );
};

export default ResultsList;
