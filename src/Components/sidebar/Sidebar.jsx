import { useContext, useEffect, useRef } from "react";
import LogoBlue from "../../assets/images/logo_blue.svg";
import {
  MdOutlineClose,
  MdOutlineGridView,
  MdOutlineLiveHelp ,
} from "react-icons/md";
import {BsPersonSquare} from "react-icons/bs";
import {LiaCoinsSolid} from "react-icons/lia";
import { LuBadgePercent } from "react-icons/lu";
import { PiCubeFocusFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
        <img src={LogoBlue} alt="" />
          <span className="sidebar-brand-text">Dashboard</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <PiCubeFocusFill  size={20} />
                </span>
                <span className="menu-link-text">Product</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <BsPersonSquare   size={20} />
                </span>
                <span className="menu-link-text">Customer</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <LiaCoinsSolid  size={18} />
                </span>
                <span className="menu-link-text">Income</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <LuBadgePercent  size={20} />
                </span>
                <span className="menu-link-text">Promote</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLiveHelp  size={20} />
                </span>
                <span className="menu-link-text">Help</span>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
