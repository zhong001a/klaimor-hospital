import React,{ useState } from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLink";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElement/Backdrop/Backdrop";
const MainNavigation = (porps) => {
  
  const [ drawerIsOpen, setDrawerIsOpen ] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawer = () => {
    setDrawerIsOpen(false)
  }

  return (
    <React.Fragment>
      {drawerIsOpen &&  <Backdrop onClick= { closeDrawer } />}
      {drawerIsOpen && (
        <SideDrawer onClick={closeDrawer}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks/>
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span/>
          <span/>
          <span/>
        </button>
        <Link className='Link' to='/' exact>
          <h1 className="main-navigation__title">KLAIMOR</h1>
        </Link>

        <nav className="main-navigation__header-nav">
          <NavLinks/>
        </nav>
      </MainHeader>
    </React.Fragment>
    
  );
};

export default MainNavigation;
