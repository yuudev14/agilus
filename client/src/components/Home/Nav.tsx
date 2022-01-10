import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
        <li>
          <Link to="/home">
            <i className="fa fa-home"></i>Home
          </Link>
        </li>
        <li>
          <Link to="tasks">
            <i className="fa fa-tasks"></i>My Tasks
          </Link>
        </li>
        <li>
          <Link to="tasks">
            <i className="fa fa-inbox"></i>Inbox
          </Link>
        </li>
        <li onClick={logout}>
          <i className="fa fa-sign-out"></i>logout
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
