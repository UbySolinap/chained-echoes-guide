import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Chained Echoes personalized guide</h1>
        <p>Welcome sir, what would you like to ask at this very moment?</p>
        <ul>
          <li>
            <Link to="/gamebasics" className="links">
              The basics of the game
            </Link>
          </li>
          <li>
            <Link to="/materials" className="links">
              Where can I find this material
            </Link>
          </li>
          <li>
            <Link to="/optionalcharacters" className="links">
              I`m Looking for an optional party member
            </Link>
          </li>
          <li>
            <Link to="/clanrecruits" className="links">
              How to recruit a certain clan member
            </Link>
          </li>
          <li>
            <Link to="/uniquemonsters" className="links">
              I will hunt this Unique Monster. Where is it
            </Link>
          </li>
        </ul>
        <p className={styles.note}>
          This guide is intended for personal use only. Guides and resources are
          created by others, links are included in each guide. Happy Gaming!
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default Homepage;
