import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";
import Container from "../container/Container";
import { ThemeContext } from "../../App";
import { changeTheme } from "../../themeSlice";

function Navbar({ handleThemeChange }) {
  const img = "/userprofile.img";
  const userData = {
    firstName: "Hama",
    lastName: "Saadwn",
    profile: `http://localhost3000${img}`,
  };
  const isDark = useSelector((state) => state.theme.isDark);

  const dispatch = useDispatch();

  //const isDark = useContext(ThemeContext);

  //console.log(isDark);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(userData);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // const handleChangeClick = () => {
  //   setUser({
  //     ...user,
  //     firstName: "Mohammed",
  //   });
  // };

  //console.log(isDark);
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
              onChange={() => {
                dispatch(changeTheme());
              }}
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
              <Button text="Login" isDark={isDark} />
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
