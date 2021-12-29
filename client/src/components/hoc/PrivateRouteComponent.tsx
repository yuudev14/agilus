import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type ChildrenComponentType = {
  Component: React.FC;
};
const PrivateRouteComponent = ({ Component }: ChildrenComponentType) => {
  const path = ["/", "/register", "/login"];
  const auth = useSelector((state: RootStateOrAny) => state.authReducer.auth);
  const location = useLocation();
  const url = location.pathname;
  const checkUrl = () => {
    if (path.includes(url)) {
      return auth === true ? (
        <Navigate to="/home" />
      ) : auth === false ? (
        <Component />
      ) : (
        <></>
      );
    } else {
      return auth === true ? (
        <Component />
      ) : auth === false ? (
        <Navigate to={`/login?next=${url}`} />
      ) : (
        <></>
      );
    }
  };

  return checkUrl();
};

export default PrivateRouteComponent;
