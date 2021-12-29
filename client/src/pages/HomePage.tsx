import React from "react";
import Header from "../components/Home/Header";
import { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const auth = useSelector((state: RootStateOrAny) => state.authReducer.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    if (auth) {
      navigate("/home");
    }
  }, [auth, navigate]);
  return (
    <>
      <Header />
      <main></main>
    </>
  );
};

export default HomePage;
