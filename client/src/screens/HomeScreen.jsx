import React from 'react'
import { Card, CardActionArea, Box } from '@mui/material'
import HomeLogo from '../components/HomeLogo'
import '../index.css'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useStyles } from '../styles'
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const styles = useStyles()
  const navigate = useNavigate()

  function handleNavigateToDineLocation() {
    navigate('/dinelocation')
  }

  return (
    <Card>
      <CardActionArea onClick={() => handleNavigateToDineLocation('dine location')} >

        <Box className={[styles.root, styles.logo]}>
          <HomeLogo />
        </Box>
      <TouchAppIcon className={styles.touchIcon}  />
      </CardActionArea>
  </Card>
  )
}

export default HomeScreen