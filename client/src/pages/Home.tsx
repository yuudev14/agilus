import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../store/actions/authActions";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await dispatch(logoutAction());
    navigate("/");
  };
  return (
    <main>
      <nav>
        <h1>Agilus</h1>
        <ul>
          <li>Home</li>
          <li>My Tasks</li>
          <li>Inbox</li>
          <li onClick={logout}>logout</li>
        </ul>
      </nav>
      <section></section>
    </main>
  );
};

export default Home;
