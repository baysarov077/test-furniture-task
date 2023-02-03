import React, { useState } from "react";
import "../../styles/sofas.css";

const categories = [
  {
    categorieId: 1,
    name: "Цена",
  },
  {
    categorieId: 2,
    name: "Размер",
  },
  {
    categorieId: 3,
    name: "Тип ткани",
  },
  {
    categorieId: 4,
    name: "Наполнение",
  },
  {
    categorieId: 5,
    name: "Модель дивана",
  },
];

const SofaFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Диваны
      </h1>
      <div className="sofas">
        <button
          className={open ? "all-filters" : "all-filters-disabled"}
          onClick={() => setOpen(!open)}
        >
          Все фильтры
        </button>
        <div className="sofa-filters">
          {open &&
            categories.map((item) => {
              return (
                <button key={item.categorieId} className="filters">
                  {item.name}
                </button>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SofaFilter;
