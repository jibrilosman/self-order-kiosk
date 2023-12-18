import axios from "axios";
import { 
    OREDER_SET_TYPE,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    ORDER_ADD_ITEM ,
    ORDER_REMOVE_ITEM,
    ORDER_CLEAR,
    ORDER_SET_PAYMENT_TYPE,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
} from "./constants";

export const SetOrderType = (dispatch, orderType) => {
    return dispatch({
        type: OREDER_SET_TYPE,
        payload: orderType,
    });
};

export const listCategories = async (dispatch) => {
    dispatch({
        type: CATEGORY_LIST_REQUEST,
    });
    try {
        const { data } = await axios.get("/api/categories");
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
};

export const listProducts = async (dispatch, categoryName = '') => {
    dispatch({type: PRODUCT_LIST_REQUEST});

    try {
        const { data } = await axios.get(`/api/products?category=${categoryName}`);
        return dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        return dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}

export const addToOrder = (dispatch, item) => {
    return dispatch({
        type: "ORDER_ADD_ITEM",
        payload: item,
    });
};

export const removeFromOrder = (dispatch, item) => {
    return dispatch({
        type: "ORDER_REMOVE_ITEM",
        payload: item,
    });
};

export const clearOrder = async (dispatch) => {
    return dispatch({
        type: "ORDER_CLEAR",
    });
};

export const setPaymentType = (dispatch, paymentType) => {
    return dispatch({
        type: "ORDER_SET_PAYMENT_TYPE",
        payload: paymentType,
    });
};

export const createOrder = async (dispatch, order) => {
    try {
        dispatch({ type: "ORDER_CREATE_REQUEST", payload: order });
        const { data } = await axios.post("/api/orders", order);
        dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data });
        localStorage.removeItem("orderItems");
        dispatch({ type: "ORDER_CLEAR" });
    } catch (error) {
        dispatch({
            type: "ORDER_CREATE_FAIL",
            payload: error.message,
        });
    }
};