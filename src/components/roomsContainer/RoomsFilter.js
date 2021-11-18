import React from "react";
import { useGlobalContext } from "../../context/contextProvider";

const RoomsFilter = () => {
  const { serachRoom } = useGlobalContext();
  // const {
  //   type,
  //   capacity,
  //   price,
  //   minPrice,
  //   maxPrice,
  //   minSize,
  //   maxSize,
  //   breakfast,
  //   pets,
  // } = serachRoom;

  return <section className="filter">hello from room filter</section>;
};

export default RoomsFilter;
