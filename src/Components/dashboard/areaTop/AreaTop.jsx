import "./AreaTop.css";
import { MdOutlineMenu } from "react-icons/md";
import { useContext, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import Select,{ components} from "react-select";
import { BsSearch } from "react-icons/bs";



const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);

 const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };


  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Dashboard</h2>
      </div>
      <div className="area-top-r">
        <div>
          <Select
            className="react-single-select"
            isSearchable={true}
            components={{
              Control: ({ children, ...rest }) => (
                <components.Control {...rest}>
                  <BsSearch style={{marginLeft:"1rem"}}/> {children}
                </components.Control>
              )}}
            placeholder="Search"
            onMenuClose={handleCloseMenu}
            onMenuOpen={() => setMenuIsOpen(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default AreaTop;
