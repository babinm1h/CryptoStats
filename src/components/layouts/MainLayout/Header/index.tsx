import React, { useState } from "react";
import { CloseIcon, MenuIcon } from "../../../../assets/icons";
import s from "./Header.module.scss";
import { AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import logo from "../../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { AllRoutes } from "../../../AppRoutes";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.logoBlock}>
            <span className={s.btnContainer}>
              <button className={s.menuBtn} onClick={toggleOpen}>
                {open ? <CloseIcon className={s.menuIcon} /> : <MenuIcon className={s.menuIcon} />}
              </button>
            </span>
            <NavLink to={AllRoutes.HOME}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <nav className={s.nav}>
            <NavLink to={AllRoutes.CONVERTER}>Crypto Converter</NavLink>
            <NavLink to={AllRoutes.TOP_CURRENCIES}>Top Currencies</NavLink>
            <NavLink to={AllRoutes.ALL_CURRENCIES}>All Currencies</NavLink>
          </nav>
        </div>
      </header>
      <AnimatePresence>{open && <Navbar onClose={onClose} key="navi" />}</AnimatePresence>
    </>
  );
};

export default Header;
