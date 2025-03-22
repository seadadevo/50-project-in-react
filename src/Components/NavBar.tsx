import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header  className=" bg-[#663399]">
      <div className="container mx-auto h-[70px] flex items-center justify-between">
        <NavLink className="font-bold text-[20px] text-white" to={"/"}>
          &lt;Ahmed Magdy/&gt;
        </NavLink>
        <ul className="flex items-center justify-between space-x-10
         text-white font-semibold">
           <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
