import React from "react";
import Mapa from "./map.jsx";

const MapLayOut = (props) => {
  return (
    <>
      <Mapa />
      {props.children}
    </>
  );
};

export default MapLayOut;