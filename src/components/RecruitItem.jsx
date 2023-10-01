import { Link } from "react-router-dom";

import styles from "./RecruitItem.module.css";

function RecruitItem({ recruit }) {
  return (
    <li className={styles.item}>
      <Link to={`${recruit.info.id}`} className="links">
        <h2>
          {recruit.info.act} - {recruit.info.name}
        </h2>
      </Link>
    </li>
  );
}

export default RecruitItem;
