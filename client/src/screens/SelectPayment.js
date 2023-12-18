import React, { useContext } from 'react'
import Logo from '../assets/logo2.png'
import PayHere from '../assets/payhere.png'
import AtCounter from '../assets/atcounter1.png'
import { useStyles } from '../styles'
import { useNavigate } from 'react-router-dom'
import { setPaymentType } from '../actions'
import { Store } from '../Store'

import { 
    Box,
    Typography,
    CardMedia,
    CardActionArea,
    Fade,
 } from '@mui/material'

const SelectPayment = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const { dispatch } = useContext(Store);

    const selecthandler = (paymentType) => {
        setPaymentType(dispatch, paymentType);
        if(paymentType === 'Pay Here'){
            navigate('/payment')
        } else {
            navigate('/complete')
        }
    }
  return (
    <Fade in={true}>
        <Box className={[styles.root]}>
            <Box className={[styles.main, styles.center]} style={{background:'#FFE600', padding:'10px'}}>
                <img src={Logo} alt="logo" className={styles.homeLogo} />
                <Typography component='h3' variant='h3' className={styles.center} gutterBottom >
                Select Payment Type
                </Typography>
                <Box className={styles.cards}>
                    
                        <CardActionArea
                        style={{border: '5px solid #FFF', marginRight:'5px'}}
                        onClick={() => selecthandler('Pay Here')}
                         >
                            <CardMedia
                                component="img"
                                // height="140"
                                image={PayHere}
                                alt="PayHere"
                                className={styles.media}
                            />
                            <Typography 
                              component='h3'
                              variant='h3' 
                              className={styles.center}  
                              gutterBottom 
                              >
                            Pay Here
                            </Typography>
                        </CardActionArea>
                  
                        <CardActionArea
                         style={{border: '5px solid #FFF', marginRight:'5px'}}
                         onClick={() => selecthandler('At Counter')}
                         >
                            <CardMedia
                                component="img"
                                // height="140"
                                image={AtCounter}
                                alt="AtCounter"
                                className={styles.media}
                            />
                            <Typography 
                              component='h3'
                              variant='h3' 
                              className={styles.center}  
                              gutterBottom 
                              >
                            At Counter
                            </Typography>
                        </CardActionArea>
                    
                </Box>
            </Box>
        </Box>
    </Fade>
  )
}

export default SelectPayment