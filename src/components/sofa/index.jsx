import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sofas.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Sofa = ({ id, price }) => {
  return (
    <div className="sofa-block">
      <div className="sofa-image">
        <FavoriteBorderOutlinedIcon className="sofa-favorite" />
      </div>
      <div>
        <div>
          <h3>Диван Клик-Кляк</h3>
          <div>
            <span>{`${price} ₽`}</span>
            <strike>50000 ₽</strike>
          </div>
        </div>
        <Link to={`/sofas/${id}`}>
          <button className="view-more">Посмотреть</button>
        </Link>
      </div>
    </div>
  );
};

export default Sofa;
