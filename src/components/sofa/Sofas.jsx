import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sofa from ".";
import { getSofas } from "../../app/reducers/sofasReducer";

const Sofas = () => {
  const data = useSelector((state) => state.sofas.sofas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSofas());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "100px",
      }}
    >
      {data.map((item) => {
        return <Sofa key={item.id} id={item.id} price={item.price} />;
      })}
    </div>
  );
};

export default Sofas;
