import React from 'react';
import styles from "../styles/intro.module.css"

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>navbar</div>
      <div className={styles.headerContainer}>
        <div className={styles.headerDescription}>
          <img src='./playIcon.png' alt='icon' className={styles.headerImg}/>
          <span>Learn about Alibaba.com</span>
        </div>
        <div className={styles.headerTitle}>
          The leading B2B ecommerce platform for global trade
        </div>
      </div>
    </div>
  )
}

export default Intro