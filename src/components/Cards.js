import React from 'react'
import styles from "../styles/cards.module.css"
import { cardsData } from '../utils/constants'

const Cards = () => {

  const src = "./windowsIcon.png"

  return (
    <div className={styles.container}>
      {cardsData.map(card => (
        <div className={styles.cardContainer}>
          <div className={styles.cardImgContainer}>
            <img className={styles.cardImg} src={card.avatar} />
          </div>
          <div className={styles.cardTitle}>{card.title}</div>
          <div className={styles.cardDesc}>{card.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Cards