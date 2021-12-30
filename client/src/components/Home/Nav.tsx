import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../store/actions/authActions";
import { setNavStateAction } from "../../store/slicers/navSlicers";

const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navState = useSelector(
    (state: RootStateOrAny) => state.navReducer.state
  );

  const logout = async () => {
    await dispatch(logoutAction());
    navigate("/");
  };

  const closeMenu = () => {
    dispatch(setNavStateAction(false));
  };
  return (
    <nav className={navState ? "" : "closeNav"}>
      <section>
        <h1>Agilus</h1>
        <i className="fa fa-bars" onClick={closeMenu}></i>
      </section>
      <ul>
        <li>Home</li>
        <li>My Tasks</li>
        <li>Inbox</li>
        <li onClick={logout}>logout</li>
      </ul>
    </nav>
  );
};

export default Nav;
