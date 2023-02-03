import React from "react";
import "../../styles/headerCategories.css";

const HeaderCategories = () => {
  const categories = [
    "Новинки",
    "Акции",
    "Диваны",
    "Кресла",
    "Кровати",
    "Стулья",
    "Столы",
    "Матрасы",
    "Пуфы",
  ];

  return (
    <div>
      <ul className="list">
        {categories.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default HeaderCategories;
