import React from 'react'
import logo from '../assets/Logo1.png'
import { useStyles } from '../styles'

const Logo = () => {
  const styles = useStyles()
  return (
    <img src={logo} alt='logo' className={styles.logo} />
  )
}

export default Logo