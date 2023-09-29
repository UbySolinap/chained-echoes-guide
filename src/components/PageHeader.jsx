import styles from "./PageHeader.module.css";

function PageHeader({ children, img }) {
  return (
    <header className={`${styles.header} ${styles[img]}`}>{children}</header>
  );
}

export default PageHeader;
