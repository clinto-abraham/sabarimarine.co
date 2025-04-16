"use client";
import Link from "next/link";
import styles from "@/styles/layout/header.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className={"header"}>
      <div className="header">
        <a href="/" className="logo">
          Sabari Marine
        </a>
        <div className="header-right">
          <Link href="/" className={router.asPath === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            href="#services"
            className={router.asPath === "/#services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            href="#about"
            className={router.asPath === "/#about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            href="#contact"
            className={router.asPath === "/#contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

//   <nav className={styles.navbar}>
{
  /* <div className={styles.logo}>Sabari Marine Enterprise</div>
<ul className={styles.navLinks}>
  <li>
    <Link
      href="/"
      className={router.asPath === "/" ? "active"] : styles[""]}
    >
      Home
    </Link>
  </li>
  <li>
    <Link href="#services">Services</Link>
  </li>
  <li>
    <Link
      href="#about"
      className={
        router.asPath === "/about" ? styles["active"] : styles[""]
      }
    >
      About
    </Link>
  </li>
  <li>
    <Link
      href="#contact"
      className={
        router.asPath === "/about" ? styles["active"] : styles[""]
      }
    >
      Contact
    </Link>
  </li>
</ul>
</nav> */
}

export default Navbar;

// "use client";
// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import styles from "@/styles/layout/header.scss";

// const Header = () => {
//   const router = useRouter();
//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1 className={styles.logo}>Logo</h1>
//         <nav className={styles.nav}>
//           <Link
//             href="/"
//             className={router.asPath === "/" ? styles["active"] : styles[""]}
//           >
//             Home
//           </Link>
//           <Link href="/services">Services</Link>
//           <Link
//             href="/about"
//             className={
//               router.asPath === "/about" ? styles["active"] : styles[""]
//             }
//           >
//             About
//           </Link>
//           <Link href="/contact">Contact</Link>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;

// import styles from "@/styles/layout/Header.module.scss";
// import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
