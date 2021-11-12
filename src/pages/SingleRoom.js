import React from "react";
import { useParams, Link } from "react-router-dom";

import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";

const SingleRoom = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <>
      <Header>
        <Banner title="single-room" subtitle="deluxe rooms starting at $300">
          <Link to="/" className="btn-primary">
            back home
          </Link>
        </Banner>
      </Header>
    </>
  );
};

export default SingleRoom;
