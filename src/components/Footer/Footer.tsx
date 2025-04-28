import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="mailto:info@jet007carwash.com" className={styles.contactLink}>
        Contact Us
      </a>
    </footer>
  );
};

export default Footer;
