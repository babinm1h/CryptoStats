import React, { FC } from "react"
import s from "./Navbar.module.scss"
import { motion } from "framer-motion"

interface INavbarProps {
  onClose: () => void
}

const navbarVars = {
  closed: { x: "-400px", opacity: 0 },
  open: { x: "0px", opacity: 1, transition: { duration: 0.4 } },
  exit: { x: "-400px", opacity: 0, transition: { duration: 0.4 } },
}

const overlayVars = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
  exit: { opacity: 0 },
}

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
          <li className={s.item}>Some link</li>
          <li className={s.item}>Some link</li>
          <li className={s.item}>Some link</li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
