import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar min-[767px]:hidden  ">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} color="#ffff" />
          </Link>
        </div>
        <div className={`${sidebar ? "nav-menu active" : "nav-menu"} z-50 `}>
          <ul
            className="nav-menu-items flex flex-col items-start justify-start"
            onClick={showSidebar}
          >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="text-white flex p-4">
              <Link
                to={"/"}
                className="text-white flex justify-center items-center px-8 py-5 w-full "
              >
                <AiIcons.AiFillHome />
                <span className="mx-4">Users</span>
              </Link>
            </li>

            <li className="text-white flex p-4">
              <Link
                to={"/normalPackUsers"}
                className="text-white flex justify-center items-center px-8 py-5 w-full"
              >
                <AiIcons.AiFillCarryOut />
                <span className="mx-4 ">Normal Pack</span>
              </Link>
            </li>
            <li className="text-white flex p-4">
              <Link
                to={"/goldenPackUsers"}
                className="text-white flex justify-center items-center px-8 py-5 w-full"
              >
                <AiIcons.AiFillCarryOut />
                <span className="mx-4">Golden Pack</span>
              </Link>
            </li>
            <li className="text-white flex p-4">
              <Link
                to={"/diamandPackUsers"}
                className="text-white flex justify-center items-center px-8 py-5 w-full"
              >
                <AiIcons.AiFillCarryOut />
                <span className="mx-4 ">Diamand Pack</span>
              </Link>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
