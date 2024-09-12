import React, { useState } from "react";
import closeIcon from '../../assets/closeIcon.png'
import menuIcon from '../../assets/menuIcon.png'
import styles from "./NavbarStyles.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Sayma Ahmad
      </a>
      <div className={styles.menu}>
        {/* <img
          className={styles.menuBtn}
          src={
            menuIcon
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        /> */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#projects">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
