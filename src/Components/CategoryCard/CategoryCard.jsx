import React from "react";
import "./CategoryCard.css";

const categories = ["Hotels", "Apartments", "Villas", "Resorts", "Cabins"];

const CategoryCard = ({ onCategoryClick }) => {
  return (
    <div className="category-container">
      {categories.map((category) => (
        <button
          key={category}
          className="category-button"
          onClick={() => onCategoryClick(category.toLowerCase())}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryCard;
