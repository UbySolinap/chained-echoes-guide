import { useParams } from "react-router-dom";
import { monsters } from "../../data/uniqueMonsters.json";

import styles from "./UniqueMonster.module.css";
import BackButton from "./BackButton";

function UniqueMonster() {
  const { id } = useParams();

  const uniqueMonsters = monsters;

  const monster = uniqueMonsters.filter(
    (monster) => Number(id) === monster.info.id
  );

  const { name, location, details, img } = monster[0].info;

  return (
    <div className={styles.uniqueMonster}>
      <img src={img} alt={name} />
      <h2>
        {name} - {location}
      </h2>
      <p>{details}</p>
      <BackButton />
    </div>
  );
}

export default UniqueMonster;
