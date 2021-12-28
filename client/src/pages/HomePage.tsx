import React from "react";
import Header from "../components/Home/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default HomePage;
