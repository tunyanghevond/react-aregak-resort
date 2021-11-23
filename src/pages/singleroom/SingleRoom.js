import React from "react";
import "./single-room.css";
import { useParams, Link } from "react-router-dom";
import defaultBcg from "../../images/room-1.jpeg";

import Header from "../../styledComponents/styleHeader";
import Banner from "../../components/banner/Banner";

import { useGlobalContext } from "../../context/contextProvider";

const SingleRoom = () => {
  const { slug } = useParams();
  const { getSingleRoom } = useGlobalContext();
  const room = getSingleRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be fpund...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg] = images;

  return (
    <>
      <Header img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </Header>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((image, index) => {
            return <img key={index} src={image} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: ${size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} persone`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allow"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>-{item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
