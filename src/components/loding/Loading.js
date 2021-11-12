import React from "react";
import "./Loading.css";
import loadingGif from "../../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="lorem" />
    </div>
  );
};

export default Loading;
