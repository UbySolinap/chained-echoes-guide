import { Link } from "react-router-dom";

function UniqueMonstersItem({ monster }) {
  return (
    <li>
      <Link to={`${monster.info.id}`} className="links">
        <h2>
          {monster.info.location} - {monster.info.name}
        </h2>
      </Link>
      <br />
    </li>
  );
}

export default UniqueMonstersItem;
