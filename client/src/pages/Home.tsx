import React from "react";
import MainSection from "../components/Home/MainSection";
import Nav from "../components/Home/Nav";

import "../styles/home/home.scss";

const Home: React.FC = () => {
  return (
    <main>
      <Nav />
      <MainSection />
    </main>
  );
};

export default Home;
