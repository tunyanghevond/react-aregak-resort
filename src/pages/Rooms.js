import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/roomsContainer/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Header headerStyle="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Header>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
