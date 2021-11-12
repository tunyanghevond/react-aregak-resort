import { useState, useEffect, createContext, useContext } from "react";
import items from "../data";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);

  const [sortedRooms, setSortedRooms] = useState([]);

  const [featuredRooms, setFeaturedRooms] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
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

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        getSingleRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(RoomContext);
};
