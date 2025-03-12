import React, { useState, useCallback, useMemo, useEffect } from "react";
import styles from "../styles/founders.module.css";
import { foundersData } from "../utils/constants";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Founders = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const totalFounders = foundersData.length;

  const prevSlide = useCallback(() => {
    setCurrIndex((prev) => (prev === 0 ? totalFounders - 1 : prev - 1));
  }, [totalFounders]);

  const nextSlide = useCallback(() => {
    setCurrIndex((prev) => (prev === totalFounders - 1 ? 0 : prev + 1));
  }, [totalFounders]);

  const founder = useMemo(() => foundersData[currIndex], [currIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <LeftOutlined onClick={prevSlide} className={styles.prev} />
          <img className={styles.avatar} src={founder.avatar} alt={founder.title} />
          <div className={styles.titleContainer}>
            <div className={styles.title}>{founder.title}</div>
            <div className={styles.position}>{founder.position}</div>
          </div>
        </div>
        <div className={styles.rightContainer}>
        <LeftOutlined onClick={prevSlide} className={styles.prevRightCont} />
          <div className={styles.description}>{founder.description}</div>
          <RightOutlined onClick={nextSlide} className={styles.next} />
        </div>
      </div>
    </div>
  );
};

export default Founders;
