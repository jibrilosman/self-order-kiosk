import React, { useContext } from 'react'
import { Fade, Typography, Box, CardActionArea, CardMedia } from '@mui/material'
import { useStyles } from '../styles'
import DineIn from '../assets/Dine-In.png'
import TakeOut from '../assets/Take-Out.png'
import Logo from '../components/Logo'
import { Store } from '../Store'
import { SetOrderType } from '../actions'
import { useNavigate } from 'react-router-dom'

const DineLocation = () => {
const styles = useStyles()
const navigate = useNavigate()
const { dispatch } = useContext(Store);

const handleLocation = (orderType) => {
    SetOrderType(dispatch, orderType);
    navigate('/order');
}

    
  return (
    <Fade in={true}>
        <Box className={[styles.root, styles.imgBG]} >
            <Box className={[styles.main, styles.center]}>
                <Logo large />
                <Typography component='h3' variant='h3' className={`${styles.center} && ${styles.white}`} gutterBottom >
                What deliciousness are you having today? 
                </Typography>
                <Box className={styles.cards}>
                    
                        <CardActionArea onClick={() => handleLocation('Dine in')}>
                            <CardMedia
                                component="img"
                                // height="140"
                                image={DineIn}
                                alt="Dine In"
                                className={styles.media}
                            />
                        </CardActionArea>
                    

                    
                        <CardActionArea onClick={() => handleLocation('Take out')}>
                            <CardMedia
                                component="img"
                                // height="140"
                                image={TakeOut}
                                alt="Take Out"
                                className={styles.media}
                            />
                        </CardActionArea>
                    
                </Box>
            </Box>
        </Box>
    </Fade>
  )
}

export default DineLocation