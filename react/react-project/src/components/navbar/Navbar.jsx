import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";
import Container from "../container/Container";
import { changeTheme } from "../../redux/themeSlice";

function Navbar() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <Container>
        <Link className="logo" to="/">
          <img src={logo} alt="Potan Logo" />
        </Link>
        <ul>
          <li>
            <input
              type="checkbox"
              checked={isDark}
              onChange={() => dispatch(changeTheme())}
            />
            <label>Dark</label>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
          <li>
            <Link to="/login">
              <Button text="Login" />
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
