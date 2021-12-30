import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setNavStateAction } from "../../store/slicers/navSlicers";

const Header = () => {
  const navState = useSelector(
    (state: RootStateOrAny) => state.navReducer.state
  );
  const dispatch = useDispatch();
  const openNav = () => {
    dispatch(setNavStateAction(true));
  };
  return (
    <header className="userHeader">
      <section className="user">
        {navState ? null : <i className=" fa fa-bars" onClick={openNav}></i>}
        <h1>Hello Yu</h1>
      </section>
    </header>
  );
};

export default Header;
