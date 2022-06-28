import React, { useState } from "react"
import { CloseIcon, MenuIcon } from "../../../../assets/icons"
import s from "./Header.module.scss"
import { AnimatePresence } from "framer-motion"
import Navbar from "../Navbar"
import logo from "../../../../assets/logo.png"

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const onClose = () => {
    setOpen(false)
  }

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
            <img src={logo} alt="logo" />
          </div>
          <nav className={s.nav}>
            <span>Some link</span>
            <span>Some link</span>
            <span>Some link</span>
          </nav>
        </div>
      </header>
      <AnimatePresence>{open && <Navbar onClose={onClose} key="navi" />}</AnimatePresence>
    </>
  )
}

export default Header
