import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className="h-18 mt-8">
      <div className="container px-4 p-4 mx-auto flex flex-row justify-between items-center h-full">
        <div>
          <h1 className={styles.title}>bagaswara corp.</h1>
        </div>
        <div className="flex flex-row gap-8">
          <Link href="#" className={styles.nav__item}>
            <span>01</span>
            <p className="type-font">Home</p>
          </Link>
          <Link href="#" className={styles.nav__item}>
            <span>02</span>
            <p className="type-font">About</p>
          </Link>

          <Link href="#" className={styles.nav__item}>
            <span>03</span>
            <p className="type-font">Projects</p>
          </Link>

          <Link href="#" className={styles.nav__item}>
            <span>04</span>
            <p className="type-font">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
