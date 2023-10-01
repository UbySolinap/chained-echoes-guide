import { useParams } from "react-router-dom";
import { recruits } from "../../data/clanRecruits.json";

import styles from "./Recruit.module.css";
import BackButton from "./BackButton";

function Recruit() {
  const { id } = useParams();

  const clanRecruits = recruits;

  const recruit = clanRecruits.filter(
    (recruit) => Number(id) === recruit.info.id
  );

  const { name, location, details, img } = recruit[0].info;

  return (
    <div className={styles.recruitInfo}>
      <img src={img} alt={name} />
      <h2>
        {name} - {location}
      </h2>
      <p>{details}</p>
      <BackButton />
    </div>
  );
}

export default Recruit;
