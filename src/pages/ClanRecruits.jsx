import { Outlet, useParams } from "react-router-dom";
import { recruits } from "../../data/clanRecruits.json";

import PageHeader from "../components/PageHeader";
import PageNav from "../components/PageNav";
import RecruitItem from "../components/RecruitItem.jsx";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

import styles from "./ClanRecruits.module.css";

function ClanRecruits() {
  const { id } = useParams();

  const clanRecruits = recruits;

  return (
    <main className={styles.recruits}>
      <PageNav />
      <PageHeader img={"clanrecruits"}>Clan Recruits</PageHeader>
      <section>
        <p>
          Where do i get this?:
          <span>
            <a
              href="https://www.thegamer.com/chained-echoes-clan-recruit-location-complete-guide/"
              className="links"
            >
              Site reference link
            </a>
          </span>
        </p>

        {id !== undefined ? (
          <Outlet />
        ) : (
          <ul className={styles.listUl}>
            {clanRecruits.map((recruit) => (
              <RecruitItem key={recruit.info.id} recruit={recruit} />
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

export default ClanRecruits;
