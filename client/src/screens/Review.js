import React, { useContext } from "react";
import { useStyles } from "../styles";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { Store } from "../Store";
import { addToOrder, removeFromOrder } from "../actions";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Dialog,
  CardMedia,
  DialogTitle,
  TextField,
  Typography,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import Logo from "../assets/logo2.png";

const Review = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);
  const { orderItems, itemsCount, totalPrice, taxPrice, orderType } =
    state.order;
  const styles = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [product, setProduct] = React.useState({});
  const closeHandler = () => {
    setIsOpen(false);
  };
  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };
  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
  };
  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
  };

  const plus = () => {
    setQuantity(quantity + 1);
  };
  const minus = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const procedToCheckoutHandler = () => {
    navigate("/select-payment");
  };
 

  return (
    <Box className={styles.root}>
      <Box className={[styles.main, styles.navy, styles.center]}>
        <Dialog
          width="100%"
          open={isOpen}
          onClose={closeHandler}
          className={styles.dialog}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            className={styles.center}
          />
          <DialogTitle className={styles.center} style={{ fontWeight: "700" }}>
            {product.name}
          </DialogTitle>
          <Box className={[styles.row, styles.center]}>
            <Button
              variant="contained"
              color="primary"
              disabled={quantity === 1}
              onClick={minus}
              className={styles.catPrice}
              style={{background:'#000',color:'#FFE600'}}
            >
              <FaCircleMinus />
            </Button>
            <TextField
              inputProps={{ className: styles.largeInput }}
              InputProps={{
                bar: "true",
                inputProps: {
                  className: styles.largeInput,
                },
              }}
              className={styles.largeNumber}
              variant="filled"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className={styles.catPrice}
              onClick={plus}
              style={{background:'#000',color:'#FFE600'}}
            >
              <FaPlusCircle />
            </Button>
          </Box>
          <Box className={[styles.row, styles.center]}>
            <Typography className={styles.catPrice}>
              Price: ${(product.price * quantity).toFixed(2)}
            </Typography>
          </Box>
          <Box
            className={styles.row}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button
              onClick={cancelOrRemoveFromOrder}
              variant="contained"
              size="medium"
              className={styles.cancelButton}
              style={{background:'#000',color:'#FFE600'}}
            >
              {orderItems.find((x) => x.name === product.name)
                ? "Remove "
                : "Cancel"}
            </Button>
            <Button
              onClick={addToOrderHandler}
              variant="contained"
              size="medium"
              className={styles.cancelButton}
              style={{background:'#000',color:'#FFE600'}}
            >
              Add To Order
            </Button>
          </Box>
        </Dialog>
        <Box className={[styles.center, styles.column]}>
          <img
            src={Logo}
            alt="logo"
            className={styles.logo}
            width={400}
            height={300}
          />
          <Typography
            gutterBottom
            variant="h3"
            component="h5"
            className={styles.title}
            style={{ color: "#FFF" }}
          >
            Order Type: {orderType}
          </Typography>
        </Box>
        <Grid container>
          {orderItems.map((orderItem) => (
            <Grid item md={12} key={orderItem.name}>
              <Card
                className={styles.card}
                onClick={() => productClickHandler(orderItem)}
              >
                <CardActionArea>
                  <CardContent>
                    <Box className={[styles.row, styles.between]}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={styles.title}
                      >
                        {orderItem.name}
                      </Typography>
                      <Button variant="contained" className={styles.catPrice} style={{background:'#000',color:'#FFE600'}}>
                        Edit
                      </Button>
                    </Box>
                    <Box className={[styles.row, styles.between]}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={styles.title}
                      >
                        {orderItem.quantity}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={[styles.title, styles.catPrice]}
                      >
                        {orderItem.quantity * orderItem.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Box className={[styles.bordered, styles.space]}>
          My Order: {orderType} | Tax: {taxPrice} | Total: ${totalPrice} |
          Items: {itemsCount}
        </Box>
        <Box className={[styles.bordered, styles.space]}>
          <button
            onClick={() => {
              navigate("/order");
            }}
            variant="contained"
            // size="large"
            className={styles.cancelButton}
          >
            Back
          </button>
          <button
            onClick={procedToCheckoutHandler}
            variant="contained"
            disabled={orderItems.length === 0 && {curser:'not-allowed'}}
            className={styles.checkoutButton}
          >
            Proceed To Checkout
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
