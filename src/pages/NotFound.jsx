import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./not-found.css";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="notfound_container">
        <h1>The Page you are looking for is not found!</h1>
        <Link to="/">Go Back To Main Page</Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
