import { makeStyles } from "@mui/styles";
import BG from './assets/BG-2.png';
import CatBG from './assets/categoryBG.png';

export const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    imgBG: {
      background: `url(${BG}) no-repeat center center fixed`,
    },
    main: {
      flex: '1',
      // overflow: 'auto',
      flexDirection: 'column',
      display: 'flex',
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    row: {
      display: 'flex',
      padding: 10,
    },
    dialog: {
      backgroundColor: 'rgba(255,255,255,0.7)',
      // backgroundColor: '#FFE600',
      // background: `url(${CatBG}) no-repeat`,
      // backgroundSize: 'cover',
      zIndex: 1000,
    },
    bordered: {
      borderWidth: 2,
      borderRadius: 5,
      margin: 5,
      borderStyle: 'solid',
    },
    white: {
      color: '#fff',
      fontWeight: '900',
      fontFamily: 'lato',
    },
    
    homeLogo :{
        width: '100%',
        height: '100%',   
      },
      touchIcon: {
        color: '#FFE600',
        position: 'absolute',
        top: '50%',
        left: 'calc(50% - 24px)',
        fontSize: '80px',
      },
      cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      card:{
        margin: '10px',
      },
      space: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
      },
      media: {
        width: '100px',
      },
      top_banner: {
        width: '100%',
        height: '100px',
      },
      catBG: {
        height: '100%',
        backgroundColor: '#FFE600',
        background: `url(${CatBG}) no-repeat`,
        backgroundSize: 'cover',
      },
     
      catName: {
        color: '#FFE600',
        fontWeight: '600',
        fontFamily: 'League Spartan, sans-serif',
        fontSize: '20px',
        textAlign: 'center',
        padding: '10px',
        // margin: '10px',
        backgroundColor: '#000',
        borderRadius: '5px',
      },
      
      catPrice: {
        color: '#FFE600',
        fontWeight: '600',
        fontFamily: 'League Spartan, sans-serif',
        fontSize: '20px',
        textAlign: 'center',
        padding: '5px',
        // margin: '10px',
        backgroundColor: '#000',
        borderRadius: '5px',
      },
      cancelButton: {
        backgroundColor: '#000',
        color: '#FFE600',
        fontWeight: '600',
        fontFamily: 'League Spartan, sans-serif',
        fontSize: '20px',
        textAlign: 'center',
        padding: '5px',
        // margin: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      checkoutButton: {
        backgroundColor: '#000',
        color: '#FFE600',
        fontWeight: '600',
        fontFamily: 'League Spartan, sans-serif',
        fontSize: '20px',
        textAlign: 'center',
        padding: '5px',
        // margin: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      span: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      largeInput: {
        width: '50px!important',
        padding: '0!important',
        fontSize: '25px!important',
        textAlign: 'center!important',
      },
      navy: {
         backgroundColor: 'rgba(255, 230, 0, 1)',
         background: `url(${CatBG}) no-repeat`,
         backgroundSize: 'cover',
      },
      selectPayment: {
        // backgroundColor: 'rgba(255, 230, 0, 1)',
        background: `url(${CatBG}) no-repeat`,
        backgroundSize: 'cover',
     },
      column: {
        flexDirection: 'column',
      },
      between: {
        justifyContent: 'space-between',
      },

}));