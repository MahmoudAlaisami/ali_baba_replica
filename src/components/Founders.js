import React from "react";
import styles from "../styles/founders.module.css";
import { foundersData } from "../utils/constants";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Founders = () => {
  const [currIndex, setCurrIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrIndex((prev) => (prev === 0 ? foundersData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrIndex((prev) => (prev === foundersData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <LeftOutlined onClick={prevSlide} className={styles.prev}/>
          <img className={styles.avatar} src={foundersData[currIndex].avatar} />
          <div className={styles.titleContainer}>
            <div className={styles.title}>{foundersData[currIndex].title}</div>
            <div className={styles.position}>{foundersData[currIndex].position}</div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.description}>{foundersData[currIndex].description}</div>
          {/* <div className={styles.next}> */}
          <RightOutlined onClick={nextSlide} className={styles.next}/>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Founders;
