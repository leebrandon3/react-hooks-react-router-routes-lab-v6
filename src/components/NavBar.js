import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/directors'>Directors</Link>
      <br/>
      <Link to='/actors'>Actors</Link>
      <br/>
    </nav>
    );
};

export default NavBar;
