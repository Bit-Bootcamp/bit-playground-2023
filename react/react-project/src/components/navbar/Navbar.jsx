import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";
import Container from "../container/Container";

function Navbar() {
  const img = "/userprofile.img";
  const userData = {
    firstName: "Hama",
    lastName: "Saadwn",
    profile: `http://localhost3000${img}`,
  };

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

  return (
    <nav className="navbar">
      <Container>
        <Link className="logo" to="/">
          <img src={logo} alt="Potan Logo" />
        </Link>
        <ul>
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
