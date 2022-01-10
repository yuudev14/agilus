import React from "react";
// import { RootStateOrAny, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

type ChildrenComponentType = {
  Component: React.FC;
};
const PublicRouteComponent = ({ Component }: ChildrenComponentType) => {
  // const auth = useSelector((state: RootStateOrAny) => state.authReducer.auth);
  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  return (
    <>
      {/* {auth === false ? (
        <Component />
      ) : auth === true ? (
        // <Navigate to={`/home`} />
      ) : (
        <></>
      )} */}
    </>
  );
};

export default PublicRouteComponent;
