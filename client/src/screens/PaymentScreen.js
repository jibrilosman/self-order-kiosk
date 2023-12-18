import React from 'react'
import Logo from '../assets/logo2.png'
import { useStyles } from '../styles'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Typography,
    Fade,
    CircularProgress,
    Button,
 } from '@mui/material'


const PaymentScreen = () => {
    const styles = useStyles();
    const navigate = useNavigate();
  return (
        <Box className={styles.root} style={{background:'#FFE600', padding:'10px'}}>
            <Box className={[styles.main, styles.center]} >
                <img src={Logo} alt="logo" className={styles.homeLogo} />
                <Typography component='h' variant='h5' className={styles.center} gutterBottom >
                    Please follow the instructions on the device to complete your payment.
                  </Typography>
                  <CircularProgress />
            </Box>
            <Box className={[styles.main, styles.space]}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate('/complete')}
                style={{background:'#000',color:'#FFE600'}}
              >
                Complete
              </Button>
            </Box>
        </Box>
  )
}

export default PaymentScreen