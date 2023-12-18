import React, { useEffect, useContext} from 'react'
import Logo from '../assets/logo2.png'
import { useStyles } from '../styles'
import { useNavigate } from 'react-router-dom'
import { Store } from '../Store'
import { createOrder } from '../actions'
import {
    Box,
    Typography,
    CircularProgress,
    Button,
    Alert,
    } from '@mui/material'


const CompleteScreen = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Store);
    const { order } = state;
    const { loading, error, newOrder } = state.orderCreate;

    useEffect(() => {
        if (order.orderItems.length > 0) {
          createOrder(dispatch, order);
        }        
    }, [order]);


  return (
    <Box className={[styles.root, styles.center]} style={{background:'#FFE600', padding:'10px'}}>
            <Box className={[styles.main, styles.center]} >
                <img src={Logo} alt="logo" className={styles.homeLogo} />
               
            </Box>
            <Box className={[styles.main, styles.space]}>
            {loading ? (
            <CircularProgress />
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h4"
                component="h4"
              >
                Your order has been placed
              </Typography>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h1"
                component="h1"
              >
                Thank you!
              </Typography>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h5"
                component="h5"
              >
                Your order number is {newOrder.number}
              </Typography>
            </>
          ) }
            </Box>
            <Box className={[styles.main, styles.space]}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate('/dinelocation')}
                style={{background:'#000',color:'#FFE600'}}
              >
                Order Again
              </Button>
              </Box>
        </Box>
  )
}

export default CompleteScreen