import { useState, useEffect, createContext, useContext } from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import items from "../data";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);

  const [sortedRooms, setSortedRooms] = useState([]);

  const [featuredRooms, setFeaturedRooms] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filterRoom, setFilterhRoom] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
    setFilterhRoom((filterRoom) => ({
      ...filterRoom,
      price: maxPrice,
      maxPrice,
      maxSize,
    }));
  }, []);

  const formatData = (arr) => {
    let tempItems = arr.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getSingleRoom = (slug) => {
    let tempRoom = [...rooms];
    const singleRoom = tempRoom.find((room) => room.slug === slug);
    return singleRoom;
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = e.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    setFilterhRoom({
      ...filterRoom,
      [name]: value,
    });
    filterRooms();
  };

  const filterRooms = () => {
    let { type, capacity, price, minSize, maxSize } = filterRoom;
    // all the rooms
    let tempRoom = [...rooms];
    //transform values
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempRoom = rooms.filter((room) => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRoom = tempRoom.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    tempRoom = tempRoom.filter((room) => room.price <= price);

    //filtre by size
    tempRoom = tempRoom.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    setSortedRooms(tempRoom);
  };

  useEffect(() => {
    filterRooms();
  }, [filterRoom]);
  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        filterRoom,
        getSingleRoom,
        handleChange,
        filterRooms,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(RoomContext);
};
