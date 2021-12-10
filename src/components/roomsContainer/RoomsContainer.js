import React from "react";
import "./room-container.css";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "../loding/Loading";
import { useGlobalContext } from "../../context/context";

const RoomsContainer = () => {
  const { loading, sortedRooms, rooms } = useGlobalContext();
  if (loading) {
    <Loading />;
  }
  return (
    <>
      <RoomsFilter room={rooms} />
      <RoomsList room={sortedRooms} />
    </>
  );
};

export default RoomsContainer;
