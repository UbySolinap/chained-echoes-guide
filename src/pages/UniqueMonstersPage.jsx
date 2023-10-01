import { Outlet, useParams } from "react-router-dom";
import { monsters } from "../../data/uniqueMonsters.json";

import Footer from "../components/Footer";
import Logo from "../components/Logo";
import PageHeader from "../components/PageHeader";
import PageNav from "../components/PageNav";
import UniqueMonstersItem from "../components/UniqueMonstersItem";

import styles from "./UniqueMonstersPage.module.css";

function UniqueMonstersPage() {
  const { id } = useParams();

  const uniqueMonsters = monsters;

  return (
    <main className={styles.uniques}>
      <PageNav />
      <PageHeader img={"uniquemonsters"}>Unique Monsters</PageHeader>
      <section>
        <p>
          Where do i get this?:
          <span>
            <a
              href="https://www.arrpeegeez.com/2022/12/chained-echoes-walkthrough-unique.html"
              className="links"
            >
              Site reference link
            </a>
          </span>
        </p>

        {id ? (
          <Outlet />
        ) : (
          <ul className={styles.listUl}>
            {uniqueMonsters.map((monster) => (
              <UniqueMonstersItem key={monster.info.id} monster={monster} />
            ))}
          </ul>
        )}
      </section>
      <div className="strayLogo">
        <Logo />
      </div>
      <Footer />
    </main>
  );
}

export default UniqueMonstersPage;
