import React from "react";
import Header from "./Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="meeting_header">
        <Header />
      </div>
      <h1> Welcome to Tech at Core </h1>
      <p>
        A designer knows he has achieved perfection not when there is nothing
        left to add, but when there is nothing left to take away.
      </p>
    </div>
  );
};

export default Home;
