import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import ResultsList from "../ResultsList/ResultsList";
import "./SearchPage.css";

const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const propertyType = params.get("type") || "Hotels";

  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/${propertyType.toLowerCase()}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResults([]);
      }
    };

    fetchData();
  }, [propertyType]);

  // Filter results based on search input
  const filteredResults = results.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-page">
      <h1 className="page-title">{propertyType}</h1>
      <SearchBar onSearch={setSearchQuery} />
      <ResultsList results={filteredResults} />
    </div>
  );
};

export default SearchPage;
