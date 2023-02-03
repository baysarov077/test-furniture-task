import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSofas } from "../../app/reducers/sofasReducer";
import Header from "../header/Header";
import "../../styles/oneSofa.css";

const OneSofa = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSofas());
  }, [dispatch]);

  const data = useSelector((state) => state.sofas.sofas);

  const oneSofa = data.find((item) => item.id == id);

  console.log(oneSofa);

  return (
    <div className="container">
      <Header />
      <div className="about-sofa">
        <div className="sofa-images">
          <div className="main-sofa-image"></div>
          <div className="images-group">
            <div className="next-image"></div>
            <div className="next-image"></div>
            <div className="next-image"></div>
            <div className="next-image"></div>
          </div>
        </div>
        <div className="sofa-info">
          <div>
            <h2 style={{
              margin: '0'
            }}>Финка</h2>
            <span style={{
              marginTop: '20px'
            }}>Диван Финка</span>
            <div className="review">
              <div>55555</div>
              <span>5 отзывов</span>
            </div>
            <div>
              {`${oneSofa.price} ₽`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneSofa;
