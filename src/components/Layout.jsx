import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollUp from "./scrollup/ScrollUp";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Layout;
