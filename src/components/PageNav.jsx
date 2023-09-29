import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/gamebasics" className={styles.navlinks}>
            Game Basics
          </NavLink>
        </li>
        <li>
          <NavLink to="/materials" className={styles.navlinks}>
            Materials
          </NavLink>
        </li>
        <li>
          <NavLink to="/optionalcharacters" className={styles.navlinks}>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/clanrecruits" className={styles.navlinks}>
            Recruits
          </NavLink>
        </li>
        <li>
          <NavLink to="/uniquemonsters" className={styles.navlinks}>
            Uniques
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
