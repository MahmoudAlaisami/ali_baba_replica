import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Cards from '../components/Cards'
import styles from "../styles/landing.module.css"

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <Intro />
      <Cards />
      {/* kaclka */}
    </div>
  )
}

export default Landing