import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy;
        <span>
          Created by <strong>John Uby Solinap</strong> 2023
        </span>
      </p>
    </footer>
  );
}

export default Footer;
