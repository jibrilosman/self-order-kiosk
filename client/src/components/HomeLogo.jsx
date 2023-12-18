import React from 'react'
import home from '../assets/BG-1.png'
import { useStyles } from '../styles'

const HomeLogo = () => {
  const styles = useStyles()
  return (
    <img src={home} alt='logo' className={styles.homeLogo} />
  )
}

export default HomeLogo