import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Agilus</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
