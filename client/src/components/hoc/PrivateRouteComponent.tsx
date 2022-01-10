import React, { memo, useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

type ChildrenComponentType = {
  Component: React.FC;
};
const PrivateRouteComponent = ({ Component }: ChildrenComponentType) => {
  const auth = useSelector((state: RootStateOrAny) => state.authReducer.auth);
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (auth === false) {
      navigate(`/login?next=${url}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, url]);
  return (
    <>
      <Component />
    </>
  );
};

export default memo(PrivateRouteComponent);
