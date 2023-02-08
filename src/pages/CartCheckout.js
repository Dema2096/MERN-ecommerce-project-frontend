import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToCart,deleteFromCart } from "../actions/cartActions"
import { useEffect, useState } from 'react'
import CheckoutComponent from '../components/CheckoutComponent'

function CartCheckout() {
    const cartreducerstate = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducerstate
    const dispatch = useDispatch()
    let subtotal = cartItems.reduce((acc,item)=>acc+(item.price* item.quantity), 0)

    


    return (
        <div>
            <div className='row mt-3 justify-content-center product-table me-2 ms-2'>
            <h1 className='text-center fs-1 text-info mt-3 mb-3'>Carrito({cartItems.length})</h1>
                    <hr/>
                <div className='col-md-8 card pb-5 pt-3 table-responsive-sm'>
                    
                    <table className='table table-bordered text-white'>
                        <thead>
                            <tr>
                                <th>Nombre de Producto</th>
                                <th>Precio por unidad</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Borrar producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => {
                                return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price} ARS</td>
                                    <td><select value={item.quantity} onChange={(e) => { dispatch(addToCart(item, e.target.value)) }}>
                                        {[...Array(item.countInStock).keys()].map((x, i) => {
                                            return <option value={i + 1}>{i + 1}</option>
                                        })}
                                    </select></td>
                                    <td>{item.quantity * item.price} ARS</td>
                                    <td><i className="fa fa-trash delete" onClick={()=>dispatch(deleteFromCart(item))} ></i></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    <hr/>
                    <h1 className=' text-center fs-1 text-success m-3 '>SUBTOTAL: {subtotal} ARS</h1>
                    <hr/>
                    <CheckoutComponent amount={subtotal} className=""/>
                </div>
            </div>
        </div>
    )
}

export default CartCheckout