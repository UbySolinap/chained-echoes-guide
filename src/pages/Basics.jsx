import PageHeader from "../components/PageHeader";
import PageNav from "../components/PageNav";

import styles from "./Basics.module.css";

function Basics() {
  return (
    <main>
      <PageNav />
      <PageHeader img={"gamebasics"}>Game Basics</PageHeader>
    </main>
  );
}

export default Basics;
