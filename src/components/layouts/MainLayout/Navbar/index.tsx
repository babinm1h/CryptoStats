import React, { FC } from "react";
import s from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AllRoutes } from "../../../AppRoutes";

interface INavbarProps {
  onClose: () => void;
}

const navbarVars = {
  closed: { x: "-400px", opacity: 0 },
  open: { x: "0px", opacity: 1, transition: { duration: 0.4 } },
  exit: { x: "-400px", opacity: 0, transition: { duration: 0.4 } },
};

const overlayVars = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
  exit: { opacity: 0 },
};

const Navbar: FC<INavbarProps> = ({ onClose }) => {
  return (
    <motion.div
      className={s.overlay}
      variants={overlayVars}
      initial="closed"
      animate="open"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className={s.navbar}
        variants={navbarVars}
        initial="closed"
        animate="open"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className={s.list}>
          <li>
            <NavLink to={AllRoutes.CONVERTER} className={s.item}>
              Crypto Converter
            </NavLink>
          </li>
          <li>
            <NavLink to={AllRoutes.TOP_CURRENCIES} className={s.item}>
              Top Currencies
            </NavLink>
          </li>
          <li>
            <NavLink to={AllRoutes.ALL_CURRENCIES} className={s.item}>
              All Currencies
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
