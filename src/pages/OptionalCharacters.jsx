import PageHeader from "../components/PageHeader";
import PageNav from "../components/PageNav";

import styles from "./OptionalCharacters.module.css";

import { characters } from "../../data/optionalCharacters.json";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

function OptionalCharacters() {
  const optionalCharacters = characters;
  return (
    <main className={styles.optional}>
      <PageNav />
      <PageHeader img={"optionalcharacters"}>Optional Characters</PageHeader>
      <section>
        <p>
          Where do i get this?:
          <span>
            <a
              href="https://techraptor.net/gaming/guides/chained-echoes-character-unlock-guide"
              className="links"
            >
              Site reference link
            </a>
          </span>
        </p>
        <ul className={styles.listUl}>
          {optionalCharacters.map((character) => (
            <li key={character.info.name}>
              <h2>{character.info.name}</h2>
              <p>{character.info.details}</p>
            </li>
          ))}
        </ul>
      </section>
      <div className="strayLogo">
        <Logo />
      </div>
      <Footer />
    </main>
  );
}

export default OptionalCharacters;
