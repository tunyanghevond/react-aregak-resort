import { createContext, useContext } from "react";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  return <RoomContext.Provider value="hello">{children}</RoomContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(RoomContext);
};
