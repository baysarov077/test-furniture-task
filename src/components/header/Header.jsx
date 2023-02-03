import React, { useState } from "react";
import "../../styles/header.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HeaderCategories from "../headerCategories";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const Header = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="header_flex-box">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "350px",
            justifyContent: "space-between",
          }}
        >
          <div className="logo">LOGO</div>
          <div>
            <div className="search">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Найти мебель"
                className="header_search"
              />
              <SearchOutlinedIcon className="search-icon" />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className="city">Челябинск</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="phone"
          >
            +7 (900) 092-80-86 <KeyboardArrowDownOutlinedIcon />
          </span>
          <div className="icons-group">
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <ShoppingBagOutlinedIcon />
          </div>
        </div>
      </div>
      <div>
        <HeaderCategories />
      </div>
    </div>
  );
};

export default Header;
