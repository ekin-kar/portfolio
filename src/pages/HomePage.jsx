import React from "react";
import Home from "../components/home/Home";
import Skills from "../components/skills/Skills";
import Qualification from "../components/qualification/Qualification";
import Work from "../components/work/Work";
import Contact from "../components/contact/Contact";
import Layout from "../components/Layout";
const HomePage = () => {
  return (
    <>
      <Layout>
        <Home />
        <Skills />
        <Work />
        <Qualification />
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage;
