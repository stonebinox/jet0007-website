import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import logoImage from "../../assets/logo.png";

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.hero}>
      <div
        className={styles.parallaxBg}
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>
      <div className={styles.content}>
        <img
          src={logoImage}
          alt="Jet007 Premium Car Wash"
          className={styles.logo}
        />
        <h2 className={styles.comingSoon}>Coming Soon</h2>
      </div>
    </div>
  );
};

export default Hero;
