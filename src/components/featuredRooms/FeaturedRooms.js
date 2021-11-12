import React from "react";
import "./FeaturedRooms.css";
import Loading from "../loding/Loading";
import Rooms from "../rooms/Rooms";
import { useGlobalContext } from "../../context/contextProvider";

const FeaturedRooms = () => {
  const { loading, featuredRooms } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="featured-rooms">
      <div className="featured-title">
        <h4> featured rooms</h4>
        <div />
      </div>
      <div className="featured-rooms-center">
        {featuredRooms.map((rooms) => {
          return <Rooms key={rooms.id} room={rooms} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedRooms;
