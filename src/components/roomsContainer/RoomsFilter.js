import React from "react";
import Title from "../title/Title";
import { useGlobalContext } from "../../context/contextProvider";
const getUniqValues = (arr, type) => {
  return [...new Set(arr.map((item) => item[type]))];
};
const RoomsFilter = ({ room }) => {
  console.log(room);
  const { filterRoom, handleChange } = useGlobalContext();
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = filterRoom;

  let selectOption = getUniqValues(room, "type");
  selectOption = ["all", ...selectOption];

  return (
    <section className="filter-container">
      <Title title="search Rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="asd ">room type</label>
          <select
            name="type"
            id="asd"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {selectOption.map((item, ind) => {
              return (
                <option key={ind} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
