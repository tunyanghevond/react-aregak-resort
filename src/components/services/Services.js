import React, { useState } from "react";
import "./Services.css";
import Title from "../title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nesciunt.",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nesciunt.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Strongest Beer",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nesciunt.",
    },
    {
      icon: <FaBeer />,
      title: "free cocktails",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nesciunt.",
    },
  ]);

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index}>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
