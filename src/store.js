import { getAllProductsReducer, getProductByIdReducer, addProductReviewReducer, deleteProductReducer, addProductReducer, updateProductReducer } from "./reducers/productReducer";
import { combineReducers } from "redux"
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from "./reducers/cartReducer"
import {registerNewUserReducer , loginReducer, getAllUsersReducer, deleteUserReducer} from "./reducers/userReducer"
import thunk from "redux-thunk"
import { getOrdersByUserIdReducer, placeOrderReducer } from "./reducers/orderReducer";
import {getOrderByIdReducer, getAllOrdersReducer} from "./reducers/orderReducer"
import {updateUserReducer} from './reducers/userReducer'

const finalReducer = combineReducers({

    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    cartReducer: cartReducer,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer: placeOrderReducer,
    getOrdersByUserIdReducer : getOrdersByUserIdReducer,
    getOrderByIdReducer : getOrderByIdReducer,
    addProductReviewReducer : addProductReviewReducer,
    updateUserReducer : updateUserReducer,
    getAllUsersReducer : getAllUsersReducer,
    deleteUserReducer : deleteUserReducer,
    deleteProductReducer : deleteProductReducer,
    addProductReducer : addProductReducer,
    updateProductReducer : updateProductReducer,
    getAllOrdersReducer : getAllOrdersReducer
})

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null

const initialState = {
    cartReducer: { cartItems: cartItems },
    loginReducer :{currentUser:currentUser}
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)))


export default store