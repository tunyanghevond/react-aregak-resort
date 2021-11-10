import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Header>
      <Banner title="luxerious rooms" subtitle="deluxe rooms starting at $300">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Header>
  );
};

export default Home;
