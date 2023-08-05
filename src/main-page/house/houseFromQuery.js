import React from "react";
import { useParams } from "react-router-dom";
import House from ".";

function HouseFromQuery({ allHouses }) {
  const { id } = useParams();
  const house = allHouses.find((h) => h.id === parseInt(id));
  if (!house) {
    return <div>House not found</div>;
  }
  return <House house={house} />;
}

export default HouseFromQuery;
