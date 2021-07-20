/** @format */

import React from "react";
import Header from "./components/Header";
import Motivation from "./components/Motivation";
import Cartheading from "./components/Card/CardHeading";
import Cards from "./components/Card/Cards";
import Review from "./components/Review";
import Benefits from "./components/Benefits";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing.jsx";
import Editor from "./components/editor/Editor";
function Home() {
  return (
    <>
      <Header />
      <Motivation />
      <Cartheading />
      <Cards />
      <Review />
      <Benefits />
      <Portfolio />
      <Pricing />
      <Editor />
    </>
  );
}

export default Home;
