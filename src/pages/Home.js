import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import Services from "../components/services/Services";
import { useGlobalContext } from "../context/contextProvider";

const Home = () => {
  const asd = useGlobalContext();
  console.log(asd);
  return (
    <>
      <Header>
        <Banner
          title="luxerious rooms"
          subtitle="deluxe rooms starting at $300"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Header>
      <Services />
    </>
  );
};

export default Home;
